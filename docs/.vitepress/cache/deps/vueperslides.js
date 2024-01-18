import {
  Fragment,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  mergeProps,
  normalizeClass,
  normalizeStyle,
  openBlock,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  toDisplayString,
  vShow,
  withCtx,
  withDirectives,
  withKeys
} from "./chunk-BBHLLBAD.js";
import "./chunk-Y2F7D3TJ.js";

// node_modules/vueperslides/dist/vueperslides.es.js
var N = ["src"];
var V = ["src"];
var z = ["src"];
var A = ["src"];
var R = ["src"];
var X = { key: 2 };
var W = { class: "vueperslide__content-wrapper" };
var F = ["innerHTML"];
var Y = ["innerHTML"];
var q = { class: "vueperslide__content-wrapper" };
var K = ["innerHTML"];
var U = ["innerHTML"];
var G = {
  key: 4,
  class: "vueperslide__loader"
};
function J(e, s, i, l, o, t) {
  return openBlock(), createBlock(resolveDynamicComponent(i.link ? "a" : "div"), {
    class: normalizeClass(["vueperslide", t.slideClasses]),
    href: i.link && !t.justDragged ? i.link : false,
    target: i.link && i.openInNew ? typeof i.openInNew == "boolean" ? "_blank" : i.openInNew : "_self",
    face: t.slideFace3d,
    style: normalizeStyle(t.slideStyles),
    "aria-hidden": t.slides.activeId === e._.uid || t.isSlideVisible ? "false" : "true",
    onMouseenter: s[0] || (s[0] = (u) => e.$emit("mouse-enter", { slideIndex: t.slideIndex, title: i.title, content: i.content, image: i.image, link: i.link }, e.$el)),
    onMouseleave: s[1] || (s[1] = (u) => e.$emit("mouse-leave"))
  }, {
    default: withCtx(() => [
      t.videoObj ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        t.videoObj.webm || t.videoObj.mp4 ? (openBlock(), createElementBlock("video", mergeProps({
          key: 0,
          class: "vueperslide__video",
          width: "100%",
          height: "100%"
        }, t.videoObj.props || {}), [
          t.videoObj.webm ? (openBlock(), createElementBlock("source", {
            key: 0,
            src: t.videoObj.webm,
            type: "video/webm"
          }, null, 8, N)) : createCommentVNode("", true),
          t.videoObj.mp4 ? (openBlock(), createElementBlock("source", {
            key: 1,
            src: t.videoObj.mp4,
            type: "video/mp4"
          }, null, 8, V)) : createCommentVNode("", true),
          t.videoObj.ogv ? (openBlock(), createElementBlock("source", {
            key: 2,
            src: t.videoObj.ogv,
            type: "video/ogg"
          }, null, 8, z)) : createCommentVNode("", true),
          t.videoObj.avi ? (openBlock(), createElementBlock("source", {
            key: 3,
            src: t.videoObj.avi,
            type: "video/avi"
          }, null, 8, A)) : createCommentVNode("", true),
          createTextVNode(toDisplayString(t.videoObj.alt || "Sorry, your browser doesn't support embedded videos."), 1)
        ], 16)) : t.videoObj.url ? (openBlock(), createElementBlock("iframe", mergeProps({
          key: 1,
          class: "vueperslide__video",
          src: t.videoObj.url,
          type: "text/html",
          frameborder: "0",
          width: "100%",
          height: "100%"
        }, t.videoObj.props || {}), null, 16, R)) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true),
      e.imageSrc && t.conf.slideImageInside ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: "vueperslide__image",
        style: normalizeStyle(t.imageStyles)
      }, null, 4)) : createCommentVNode("", true),
      t.conf.slideContentOutside ? withDirectives((openBlock(), createElementBlock("div", X, [
        renderSlot(e.$slots, "content", {}, () => [
          createBaseVNode("div", W, [
            i.title ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "vueperslide__title",
              innerHTML: i.title
            }, null, 8, F)) : createCommentVNode("", true),
            i.content ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: "vueperslide__content",
              innerHTML: i.content
            }, null, 8, Y)) : createCommentVNode("", true)
          ])
        ])
      ], 512)), [
        [vShow, false]
      ]) : renderSlot(e.$slots, "content", { key: 3 }, () => [
        createBaseVNode("div", q, [
          i.title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "vueperslide__title",
            innerHTML: i.title
          }, null, 8, K)) : createCommentVNode("", true),
          i.content ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "vueperslide__content",
            innerHTML: i.content
          }, null, 8, U)) : createCommentVNode("", true)
        ])
      ]),
      t.conf.lazy && !e.loaded ? (openBlock(), createElementBlock("div", G, [
        renderSlot(e.$slots, "loader")
      ])) : createCommentVNode("", true)
    ]),
    _: 3
  }, 40, ["href", "target", "class", "face", "style", "aria-hidden"]);
}
var j = (e, s) => {
  const i = e.__vccOpts || e;
  for (const [l, o] of s)
    i[l] = o;
  return i;
};
var Q = {
  inject: ["slides", "touch", "updateSlide", "addClone", "addSlide", "removeSlide"],
  props: {
    clone: { type: Boolean },
    image: { type: String, default: "" },
    video: { type: [String, Object], default: "" },
    title: { type: String, default: "" },
    content: { type: String, default: "" },
    link: { type: String, default: "" },
    duration: { type: Number, default: 0 },
    lazyloaded: { type: Boolean },
    openInNew: { type: [Boolean, String] }
  },
  emits: ["mouse-enter", "mouse-leave"],
  data: () => ({
    imageSrc: "",
    loading: false,
    loaded: false
  }),
  computed: {
    conf() {
      return this.$parent.conf;
    },
    slideClasses() {
      return {
        "vueperslide--active": this.slides.activeId === this._.uid,
        "vueperslide--previous-slide": this.isPreviousSlide,
        "vueperslide--next-slide": this.isNextSlide,
        "vueperslide--visible": this.isSlideVisible,
        "vueperslide--loading": this.conf.lazy && !this.loaded,
        "vueperslide--has-video": this.videoObj,
        "vueperslide--has-image-inside": this.conf.slideImageInside,
        "vueperslide--no-pointer-events": this.videoObj && this.videoObj.pointerEvents === false
      };
    },
    slideStyles() {
      const { visibleSlides: e, fade: s, slideImageInside: i, gap: l, gapPx: o } = this.conf;
      return {
        ...!i && this.imageSrc && { backgroundImage: `url("${this.imageSrc}")` },
        ...e > 1 && { width: (100 - (l ? l * (e - 1) : 0)) / e + "%" },
        ...e > 1 && s && { [this.conf.rtl ? "right" : "left"]: this.slideIndex % e / e * 100 + "%" },
        ...l && { [this.conf.rtl ? "marginLeft" : "marginRight"]: l + (o ? "px" : "%") }
      };
    },
    videoObj() {
      if (!this.video)
        return null;
      let e = { url: "", alt: "", props: { controls: true } };
      return typeof this.video == "object" ? e = Object.assign(e, this.video) : typeof this.video == "string" && (e.url = this.video), e;
    },
    youtubeVideo() {
      return /youtube\.|youtu\.be/.test(this.videoObj.url);
    },
    imageStyles() {
      return { ...this.conf.slideImageInside && this.imageSrc && { backgroundImage: `url("${this.imageSrc}")` } };
    },
    slideFace3d() {
      if (!this.conf["3d"])
        return false;
      const e = ["front", "right", "back", "left"], s = (this.slides.current - 1 + this.slidesCount) % this.slidesCount, i = (this.slides.current + 1) % this.slidesCount;
      let l = "front";
      return this.slideIndex === s ? l = e[(4 + this.slides.current - 1) % 4] : this.slideIndex === i && (l = e[(this.slides.current + 1) % 4]), l = e[this.slideIndex % 4], this.conf.rtl && l === "left" ? l = "right" : this.conf.rtl && l === "right" && (l = "left"), l;
    },
    isPreviousSlide() {
      if (!this.conf["3d"])
        return false;
      const e = (this.slides.current - 1 + this.slidesCount) % this.slidesCount;
      return this._.uid === this.slides.list[e].id;
    },
    isNextSlide() {
      if (!this.conf["3d"])
        return false;
      const e = (this.slides.current + 1) % this.slidesCount;
      return this._.uid === this.slides.list[e].id;
    },
    isSlideVisible() {
      return this.slideIndex >= this.slides.firstVisible && this.slideIndex < this.slides.firstVisible + this.conf.visibleSlides;
    },
    slidesList() {
      return this.slides.list.map((e) => e.id);
    },
    slidesCount() {
      return this.slidesList.length;
    },
    slideIndex() {
      return this.slidesList.indexOf(this._.uid);
    },
    justDragged() {
      return this.touch.justDragged;
    }
  },
  methods: {
    updateThisSlide(e) {
      this.updateSlide(this._.uid, e);
    },
    loadImage() {
      if (!(this.loading || this.loaded))
        return this.loading = true, new Promise((e, s) => {
          const i = document.createElement("img");
          i.onload = () => {
            this.imageSrc = this.image, this.loading = false, this.loaded = true, this.$nextTick(() => {
              e({ image: this.imageSrc, style: ((this.$el.attributes || {}).style || {}).value });
            });
          }, i.onerror = (this.loading = false) || s, i.src = this.image;
        });
    },
    playVideo() {
      !this.videoObj || (this.videoObj.url ? this.$el.querySelector("iframe").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : this.$el.querySelector("video").play());
    },
    pauseVideo() {
      !this.videoObj || (this.videoObj.url ? this.$el.querySelector("iframe").contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*") : this.$el.querySelector("video").pause());
    }
  },
  created() {
    if (this.imageSrc = this.conf.lazy ? "" : this.image, this.clone)
      return this.addClone();
    this.addSlide({
      id: this._.uid,
      image: this.imageSrc,
      video: this.videoObj && { ...this.videoObj, play: this.playVideo, pause: this.pauseVideo },
      title: this.title,
      content: this.content,
      contentSlot: this.$slots.content,
      loaderSlot: this.$slots.loader,
      link: this.link,
      style: "",
      loadImage: this.loadImage,
      duration: this.duration
    });
  },
  mounted() {
    this.clone || this.updateThisSlide({
      contentSlot: this.$slots.content,
      loaderSlot: this.$slots.loader,
      style: ((this.$el.attributes || {}).style || {}).value
    });
  },
  beforeUnmount() {
    this.clone || this.removeSlide(this._.uid);
  },
  watch: {
    image() {
      this.imageSrc = this.conf.lazy && !this.isSlideVisible ? "" : this.image, this.clone || this.updateThisSlide({
        image: this.imageSrc,
        ...!this.conf.slideImageInside && { style: this.slideStyles }
      });
    },
    title() {
      this.clone || this.updateThisSlide({ title: this.title });
    },
    content() {
      this.clone || this.updateThisSlide({ content: this.content });
    },
    link() {
      this.clone || this.updateThisSlide({ link: this.link });
    },
    lazyloaded() {
      this.clone && (this.loaded = this.lazyloaded);
    }
  }
};
var Z = j(Q, [["render", J]]);
var $ = ["innerHTML"];
var ee = ["innerHTML"];
var te = { class: "vueperslides__inner" };
var se = {
  key: 0,
  class: "vueperslides__paused"
};
var ie = {
  key: 1,
  class: "vueperslides__progress"
};
var le = {
  key: 2,
  class: "vueperslides__fractions"
};
var ne = { viewBox: "0 0 9 18" };
var re = ["d"];
var ae = { viewBox: "0 0 9 18" };
var de = ["d"];
var oe = {
  key: 4,
  class: "vueperslides__bullets",
  ref: "bullets",
  role: "tablist",
  "aria-label": "Slideshow navigation"
};
var ue = ["aria-label", "onClick"];
var he = { class: "default" };
var ce = {
  key: 1,
  class: "vueperslides__bullets vueperslides__bullets--outside",
  ref: "bullets",
  role: "tablist",
  "aria-label": "Slideshow navigation"
};
var fe = ["aria-label", "onClick"];
var ve = { class: "default" };
var ge = ["innerHTML"];
var pe = ["innerHTML"];
function me(e, s, i, l, o, t) {
  const u = resolveComponent("vnodes"), v = resolveComponent("vueper-slide");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vueperslides", t.vueperslidesClasses]),
    ref: "vueperslides",
    "aria-label": "Slideshow",
    style: normalizeStyle(t.vueperslidesStyles)
  }, [
    t.slidesCount && t.conf.slideContentOutside === "top" ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["vueperslide__content-wrapper vueperslide__content-wrapper--outside-top", t.conf.slideContentOutsideClass])
    }, [
      t.currentSlide.contentSlot ? (openBlock(), createBlock(u, {
        key: 0,
        vnodes: t.currentSlide.contentSlot()
      }, null, 8, ["vnodes"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        t.currentSlide.title ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "vueperslide__title",
          innerHTML: t.currentSlide.title
        }, null, 8, $)) : createCommentVNode("", true),
        t.currentSlide.content ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "vueperslide__content",
          innerHTML: t.currentSlide.content
        }, null, 8, ee)) : createCommentVNode("", true)
      ], 64))
    ], 2)) : createCommentVNode("", true),
    createBaseVNode("div", te, [
      createBaseVNode("div", {
        class: "vueperslides__parallax-wrapper",
        style: normalizeStyle(`padding-bottom: ${t.conf.slideRatio * 100}%`),
        "aria-live": "polite"
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["vueperslides__track", { "vueperslides__track--dragging": e.touch.dragging, "vueperslides__track--mousedown": e.mouseDown }]),
          ref: "track",
          style: normalizeStyle(t.trackStyles)
        }, [
          createBaseVNode("div", {
            class: "vueperslides__track-inner",
            style: normalizeStyle(t.trackInnerStyles)
          }, [
            renderSlot(e.$slots, "default"),
            e.isReady && t.conf.infinite && t.canSlide && t.lastSlide ? (openBlock(), createBlock(v, {
              key: 0,
              class: "vueperslide--clone vueperslide--clone-1",
              clone: "",
              title: t.lastSlide.title,
              content: t.lastSlide.content,
              image: t.lastSlide.image,
              link: t.lastSlide.link,
              style: normalizeStyle(t.lastSlide.style),
              lazyloaded: t.lastSlide.loaded,
              "aria-hidden": "true"
            }, createSlots({ _: 2 }, [
              t.lastSlide.contentSlot ? {
                name: "content",
                fn: withCtx(() => [
                  createVNode(u, {
                    vnodes: t.lastSlide.contentSlot()
                  }, null, 8, ["vnodes"])
                ]),
                key: "0"
              } : void 0,
              t.conf.lazy && !t.lastSlide.loaded && t.lastSlide.loaderSlot ? {
                name: "loader",
                fn: withCtx(() => [
                  createVNode(u, {
                    vnodes: t.lastSlide.loaderSlot()
                  }, null, 8, ["vnodes"])
                ]),
                key: "1"
              } : void 0
            ]), 1032, ["title", "content", "image", "link", "style", "lazyloaded"])) : createCommentVNode("", true),
            e.isReady && t.conf.infinite && t.canSlide && t.firstSlide ? (openBlock(), createBlock(v, {
              key: 1,
              class: "vueperslide--clone vueperslide--clone-2",
              clone: "",
              title: t.firstSlide.title,
              content: t.firstSlide.content,
              image: t.firstSlide.image,
              link: t.firstSlide.link,
              style: normalizeStyle(t.firstSlide.style),
              lazyloaded: t.firstSlide.loaded,
              "aria-hidden": "true"
            }, createSlots({ _: 2 }, [
              t.firstSlide.contentSlot ? {
                name: "content",
                fn: withCtx(() => [
                  createVNode(u, {
                    vnodes: t.firstSlide.contentSlot()
                  }, null, 8, ["vnodes"])
                ]),
                key: "0"
              } : void 0,
              t.conf.lazy && !t.firstSlide.loaded && t.firstSlide.loaderSlot ? {
                name: "loader",
                fn: withCtx(() => [
                  createVNode(u, {
                    vnodes: t.firstSlide.loaderSlot()
                  }, null, 8, ["vnodes"])
                ]),
                key: "1"
              } : void 0
            ]), 1032, ["title", "content", "image", "link", "style", "lazyloaded"])) : createCommentVNode("", true)
          ], 4)
        ], 6)
      ], 4),
      (t.conf.pauseOnHover || t.conf.pauseOnTouch) && e.$slots.pause ? (openBlock(), createElementBlock("div", se, [
        renderSlot(e.$slots, "pause")
      ])) : createCommentVNode("", true),
      t.conf.progress ? (openBlock(), createElementBlock("div", ie, [
        renderSlot(e.$slots, "progress", {
          current: e.slides.current + 1,
          total: t.slidesCount
        }, () => [
          createBaseVNode("div", {
            style: normalizeStyle(`width: ${(e.slides.current + 1) * 100 / t.slidesCount}%`)
          }, null, 4)
        ])
      ])) : createCommentVNode("", true),
      t.conf.fractions ? (openBlock(), createElementBlock("div", le, [
        renderSlot(e.$slots, "fraction", {
          current: e.slides.current + 1,
          total: t.slidesCount
        }, () => [
          createTextVNode(toDisplayString(`${e.slides.current + 1} / ${t.slidesCount}`), 1)
        ])
      ])) : createCommentVNode("", true),
      t.conf.arrows && t.canSlide && !i.disable ? (openBlock(), createElementBlock("div", {
        key: 3,
        class: normalizeClass(["vueperslides__arrows", { "vueperslides__arrows--outside": t.conf.arrowsOutside }])
      }, [
        withDirectives(createBaseVNode("button", {
          class: "vueperslides__arrow vueperslides__arrow--prev",
          type: "button",
          onClick: s[0] || (s[0] = (c) => t.previous()),
          "aria-label": "Previous",
          onKeyup: [
            s[1] || (s[1] = withKeys((c) => t.conf.rtl ? t.next() : t.previous(), ["left"])),
            s[2] || (s[2] = withKeys((c) => t.conf.rtl ? t.previous() : t.next(), ["right"]))
          ]
        }, [
          renderSlot(e.$slots, `arrow-${t.conf.rtl ? "right" : "left"}`, {}, () => [
            (openBlock(), createElementBlock("svg", ne, [
              createBaseVNode("path", {
                "stroke-linecap": "round",
                d: t.conf.rtl ? "m1 1 l7 8 -7 8" : "m8 1 l-7 8 7 8"
              }, null, 8, re)
            ]))
          ])
        ], 544), [
          [vShow, !t.arrowPrevDisabled]
        ]),
        withDirectives(createBaseVNode("button", {
          class: "vueperslides__arrow vueperslides__arrow--next",
          type: "button",
          onClick: s[3] || (s[3] = (c) => t.next()),
          "aria-label": "Next",
          onKeyup: [
            s[4] || (s[4] = withKeys((c) => t.conf.rtl ? t.next() : t.previous(), ["left"])),
            s[5] || (s[5] = withKeys((c) => t.conf.rtl ? t.previous() : t.next(), ["right"]))
          ]
        }, [
          renderSlot(e.$slots, `arrow-${t.conf.rtl ? "left" : "right"}`, {}, () => [
            (openBlock(), createElementBlock("svg", ae, [
              createBaseVNode("path", {
                "stroke-linecap": "round",
                d: t.conf.rtl ? "m8 1 l-7 8 7 8" : "m1 1 l7 8 -7 8"
              }, null, 8, de)
            ]))
          ])
        ], 544), [
          [vShow, !t.arrowNextDisabled]
        ])
      ], 2)) : createCommentVNode("", true),
      t.conf.bullets && t.canSlide && !i.disable && !t.conf.bulletsOutside ? (openBlock(), createElementBlock("div", oe, [
        renderSlot(e.$slots, "bullets", {
          currentSlide: e.slides.current,
          bulletIndexes: t.bulletIndexes,
          goToSlide: t.goToSlide,
          previous: t.previous,
          next: t.next
        }, () => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(t.bulletIndexes, (c, a) => (openBlock(), createElementBlock("button", {
            class: normalizeClass(["vueperslides__bullet", { "vueperslides__bullet--active": e.slides.current === c }]),
            type: "button",
            key: a,
            role: "tab",
            "aria-label": `Slide ${a + 1}`,
            onClick: (h) => t.goToSlide(c),
            onKeyup: [
              s[6] || (s[6] = withKeys((h) => t.conf.rtl ? t.next() : t.previous(), ["left"])),
              s[7] || (s[7] = withKeys((h) => t.conf.rtl ? t.previous() : t.next(), ["right"]))
            ]
          }, [
            renderSlot(e.$slots, "bullet", {
              active: e.slides.current === c,
              slideIndex: c,
              index: a + 1
            }, () => [
              createBaseVNode("div", he, [
                createBaseVNode("span", null, toDisplayString(a + 1), 1)
              ])
            ])
          ], 42, ue))), 128))
        ])
      ], 512)) : createCommentVNode("", true)
    ]),
    t.conf.bullets && t.canSlide && !i.disable && t.conf.bulletsOutside ? (openBlock(), createElementBlock("div", ce, [
      renderSlot(e.$slots, "bullets", {
        currentSlide: e.slides.current,
        bulletIndexes: t.bulletIndexes,
        goToSlide: t.goToSlide,
        previous: t.previous,
        next: t.next
      }, () => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(t.bulletIndexes, (c, a) => (openBlock(), createElementBlock("button", {
          class: normalizeClass(["vueperslides__bullet", { "vueperslides__bullet--active": e.slides.current === c }]),
          type: "button",
          key: a,
          role: "tab",
          "aria-label": `Slide ${a + 1}`,
          onClick: (h) => t.goToSlide(c),
          onKeyup: [
            s[8] || (s[8] = withKeys((h) => t.conf.rtl ? t.next() : t.previous(), ["left"])),
            s[9] || (s[9] = withKeys((h) => t.conf.rtl ? t.previous() : t.next(), ["right"]))
          ]
        }, [
          renderSlot(e.$slots, "bullet", {
            active: e.slides.current === c,
            slideIndex: c,
            index: a + 1
          }, () => [
            createBaseVNode("div", ve, [
              createBaseVNode("span", null, toDisplayString(a + 1), 1)
            ])
          ])
        ], 42, fe))), 128))
      ])
    ], 512)) : createCommentVNode("", true),
    t.slidesCount && t.conf.slideContentOutside === "bottom" ? (openBlock(), createElementBlock("div", {
      key: 2,
      class: normalizeClass(["vueperslide__content-wrapper vueperslide__content-wrapper--outside-bottom", t.conf.slideContentOutsideClass])
    }, [
      t.currentSlide.contentSlot ? (openBlock(), createBlock(u, {
        key: 0,
        vnodes: t.currentSlide.contentSlot()
      }, null, 8, ["vnodes"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        t.currentSlide.title ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "vueperslide__title",
          innerHTML: t.currentSlide.title
        }, null, 8, ge)) : createCommentVNode("", true),
        t.currentSlide.content ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "vueperslide__content",
          innerHTML: t.currentSlide.content
        }, null, 8, pe)) : createCommentVNode("", true)
      ], 64))
    ], 2)) : createCommentVNode("", true)
  ], 6);
}
var Se = {
  name: "vueper-slides",
  components: {
    VueperSlide: Z,
    vnodes: {
      render() {
        return this.$attrs.vnodes;
      }
    }
  },
  provide() {
    return {
      conf: this.conf,
      slides: this.slides,
      touch: this.touch,
      updateSlide: this.updateSlide,
      addClone: this.addClone,
      addSlide: this.addSlide,
      removeSlide: this.removeSlide
    };
  },
  props: {
    alwaysRefreshClones: { type: Boolean, default: false },
    arrows: { type: Boolean, default: true },
    arrowsOutside: { type: Boolean, default: null },
    autoplay: { type: Boolean, default: false },
    breakpoints: { type: Object, default: () => ({}) },
    bullets: { type: Boolean, default: true },
    bulletsOutside: { type: Boolean, default: null },
    disable: { type: Boolean, default: false },
    disableArrowsOnEdges: { type: [Boolean, String], default: false },
    draggingDistance: { type: Number, default: null },
    duration: { type: [Number, String], default: 4e3 },
    infinite: { type: Boolean, default: true },
    fade: { type: Boolean, default: false },
    fixedHeight: { type: [Boolean, String], default: false },
    fractions: { type: Boolean, default: false },
    gap: { type: Number, default: 0 },
    initSlide: { type: Number, default: 1 },
    lazy: { type: Boolean, default: false },
    lazyLoadOnDrag: { type: Boolean, default: false },
    pauseOnHover: { type: Boolean, default: true },
    pauseOnTouch: { type: Boolean, default: true },
    parallax: { type: [Boolean, Number], default: false },
    pageScrollingElement: { type: String, default: "" },
    parallaxFixedContent: { type: Boolean, default: false },
    preventYScroll: { type: Boolean, default: false },
    progress: { type: Boolean, default: false },
    rtl: { type: Boolean, default: false },
    slideContentOutside: { type: [Boolean, String], default: false },
    slideContentOutsideClass: { type: String, default: "" },
    slideImageInside: { type: Boolean, default: false },
    slideMultiple: { type: [Boolean, Number], default: false },
    slideRatio: { type: Number, default: 1 / 3 },
    touchable: { type: Boolean, default: true },
    transitionSpeed: { type: [Number, String], default: 600 },
    visibleSlides: { type: Number, default: 1 },
    "3d": { type: Boolean, default: false }
  },
  emits: [
    "ready",
    "next",
    "previous",
    "autoplay-pause",
    "autoplay-resume",
    "before-slide",
    "slide",
    "image-loaded",
    "image-failed"
  ],
  data: () => ({
    isReady: false,
    isPaused: false,
    container: null,
    slides: {
      list: [],
      activeId: null,
      current: 0,
      focus: 0,
      firstVisible: 0
    },
    mouseDown: false,
    mouseOver: false,
    touch: {
      enabled: true,
      dragging: false,
      lazyloadTriggered: false,
      justDragged: false,
      dragStartX: 0,
      dragNowX: 0,
      dragAmount: 0
    },
    transition: { currentTranslation: 0, speed: 0, animated: false },
    autoplayTimer: null,
    nextSlideIsClone: false,
    breakpointsData: { list: [], current: null },
    parallaxData: { translation: 0, slideshowOffsetTop: null, isVisible: false }
  }),
  computed: {
    conf() {
      const e = {
        ...this.$props,
        ...this.$props.breakpoints && this.$props.breakpoints[this.breakpointsData.current] || {}
      };
      return e.slideMultiple = e.slideMultiple ? e.visibleSlides : 1, e.gap = this.gap && parseInt(this.gap) || 0, e.visibleSlides > 1 && (e["3d"] = false), (e.fade || e.disableArrowsOnEdges || e.visibleSlides > 1 || e["3d"]) && (e.infinite = false), e.visibleSlides > 1 && e.arrowsOutside === null && (e.arrowsOutside = true), e.visibleSlides > 1 && e.bulletsOutside === null && (e.bulletsOutside = true), this.touch.enabled !== e.touchable && this.toggleTouchableOption(e.touchable), e.parallax && e.parallaxFixedContent && (e.slideContentOutside = "top", e.slideContentOutsideClass = "parallax-fixed-content"), e;
    },
    slidesCount() {
      return this.slides.list.length;
    },
    gapsCount() {
      const { fade: e, "3d": s, slideMultiple: i, gap: l } = this.conf;
      if (!l || e || s || this.multipleSlides1by1 && this.slides.current < this.preferredPosition)
        return 0;
      if (!this.slides.current && this.nextSlideIsClone)
        return this.slidesCount;
      if (this.nextSlideIsClone === 0)
        return -1;
      let o = this.slides.current / i - this.preferredPosition;
      return this.multipleSlides1by1 && this.slidePosAfterPreferred > 0 && (o -= this.slidePosAfterPreferred), o;
    },
    slidesAfterCurrent() {
      return this.slidesCount - (this.slides.current + 1);
    },
    preferredPosition() {
      return this.multipleSlides1by1 ? Math.ceil(this.conf.visibleSlides / 2) - 1 : 0;
    },
    slidePosAfterPreferred() {
      return this.conf.visibleSlides - this.preferredPosition - this.slidesAfterCurrent - 1;
    },
    multipleSlides1by1() {
      return this.conf.visibleSlides > 1 && this.conf.slideMultiple === 1;
    },
    touchEnabled: {
      get() {
        return this.slidesCount > 1 && this.touch.enabled;
      },
      set(e) {
        this.touch.enabled = e;
      }
    },
    canSlide() {
      return this.slidesCount / this.conf.visibleSlides > 1;
    },
    firstSlide() {
      const e = this.slidesCount ? this.slides.list[0] : {};
      return e.style && typeof e.style == "string" && (e.style = e.style.replace(/width: ?\d+.*?;?/, "")), e;
    },
    lastSlide() {
      const e = this.slidesCount ? this.slides.list[this.slidesCount - 1] : {};
      return e.style && typeof e.style == "string" && (e.style = e.style.replace(/width: ?\d+.*?;?/, "")), e;
    },
    currentSlide() {
      const e = this.slidesCount && this.slides.list[this.slides.current] || {};
      return this.slides.current < this.slidesCount && e.id !== this.slides.activeId && this.goToSlide(this.slides.current, { animation: false, autoPlaying: true }), e;
    },
    vueperslidesClasses() {
      return {
        "vueperslides--ready": this.isReady,
        "vueperslides--rtl": this.conf.rtl,
        "vueperslides--fade": this.conf.fade,
        "vueperslides--parallax": this.conf.parallax,
        "vueperslides--slide-image-inside": this.conf.slideImageInside,
        "vueperslides--touchable": this.touchEnabled && !this.disable,
        "vueperslides--fixed-height": this.conf.fixedHeight,
        "vueperslides--3d": this.conf["3d"],
        "vueperslides--slide-multiple": this.conf.slideMultiple > 1,
        "vueperslides--bullets-outside": this.conf.bulletsOutside,
        "vueperslides--animated": this.transition.animated,
        "vueperslides--no-animation": !this.isReady
      };
    },
    vueperslidesStyles() {
      return /^-?\d/.test(this.conf.fixedHeight) ? `height: ${this.conf.fixedHeight}` : null;
    },
    trackStyles() {
      const e = {};
      return this.conf.parallax && (e.transform = `translate3d(0, ${this.parallaxData.translation}%, 0)`, e.willChange = this.parallaxData.isVisible ? "transform" : "auto"), e;
    },
    trackInnerStyles() {
      const e = {}, { fade: s, "3d": i } = this.conf;
      if (e.transitionDuration = `${this.transition.speed}ms`, i) {
        const l = this.transition.currentTranslation * 90 / 100;
        e.transform = `rotateY(-90deg) translateX(-50%) rotateY(90deg) rotateY(${l}deg)`;
      } else
        s || (e.transform = `translate3d(${this.transition.currentTranslation}%, 0, 0)`, e.willChange = this.touch.dragging || this.transition.animated ? "transform" : "auto");
      return e;
    },
    bulletIndexes() {
      return Array(Math.ceil(this.slidesCount / this.conf.slideMultiple)).fill().map((e, s) => s * this.conf.slideMultiple);
    },
    arrowPrevDisabled() {
      return !this.slides.current && this.conf.disableArrowsOnEdges;
    },
    arrowNextDisabled() {
      const { disableArrowsOnEdges: e, visibleSlides: s, slideMultiple: i } = this.conf;
      return this.slides.current + (i > 1 && s > 1 ? s - 1 : 0) === this.slidesCount - 1 && e;
    }
  },
  methods: {
    init() {
      this.container = this.$refs.vueperslides, this.touchEnabled = this.conf.touchable, this.transition.speed = this.conf.transitionSpeed, Object.keys(this.breakpoints).length && (this.setBreakpointsList(), this.setBreakpointConfig(this.getCurrentBreakpoint()));
      const e = { animation: false, autoPlaying: this.conf.autoplay };
      this.goToSlide(this.conf.initSlide - 1, e), this.bindEvents(), this.$nextTick(() => {
        this.isReady = true, this.emit("ready");
      });
    },
    emit(e, s = true, i = false) {
      let l = null;
      if ((s || typeof i == "number") && (l = {}, s && this.slides.activeId && this.slidesCount && (l.currentSlide = this.getSlideData(this.slides.current)), typeof i == "number" && this.slidesCount)) {
        const { nextSlide: o } = this.getSlideInRange(i);
        l.nextSlide = this.getSlideData(o);
      }
      this.$emit(...l ? [e, l] : [e]);
    },
    getSlideData(e) {
      const s = this.slides.list[e];
      let i = {};
      return s && (i = {
        index: e,
        title: s.title,
        content: s.content,
        contentSlot: s.contentSlot,
        image: s.image,
        link: s.link
      }), i;
    },
    setBreakpointsList() {
      this.breakpointsData.list = [99999, ...Object.keys(this.breakpoints)].map((e) => parseInt(e)).sort((e, s) => parseInt(s) - parseInt(e));
    },
    getCurrentBreakpoint() {
      const e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, s = [e, ...this.breakpointsData.list].sort((i, l) => parseInt(l) - parseInt(i));
      return this.breakpointsData.list[s.indexOf(e) - 1];
    },
    hasBreakpointChanged(e) {
      return this.breakpointsData.current !== parseInt(e);
    },
    setBreakpointConfig(e) {
      const s = this.breakpoints && this.breakpoints[e] || {}, i = s.slideMultiple && s.slideMultiple !== this.conf.slideMultiple, l = s.visibleSlides && s.visibleSlides !== this.conf.visibleSlides;
      this.breakpointsData.current = e, this.slides.current = this.getFirstVisibleSlide(this.slides.focus), i || l ? this.goToSlide(this.slides.current, { breakpointChange: true }) : this.updateTrackTranslation();
    },
    bindEvents() {
      const e = "ontouchstart" in window;
      this.touchEnabled && this.toggleTouchableOption(true), this.conf.autoplay && (this.conf.pauseOnHover && !e ? (this.container.addEventListener("mouseenter", this.onMouseEnter), this.container.addEventListener("mouseleave", this.onMouseLeave)) : this.conf.pauseOnTouch && e && document.addEventListener("touchstart", (s) => {
        this[this.$el.contains(s.target) ? "onSlideshowTouch" : "onOustideTouch"]();
      })), (this.breakpointsData.list.length || this.conf.parallax) && window.addEventListener("resize", this.onResize), this.conf.parallax && this.enableParallax();
    },
    getSlideshowOffsetTop(e = false) {
      if (this.parallaxData.slideshowOffsetTop === null || e) {
        let s = this.container, i = s.offsetTop;
        for (; s = s.offsetParent; )
          i += s.offsetTop;
        this.parallaxData.slideshowOffsetTop = i;
      }
      return this.parallaxData.slideshowOffsetTop;
    },
    enableParallax() {
      this.refreshParallax(), this.pageScrollingElement ? (this.parallaxData.scrollingEl = document.querySelector(this.pageScrollingElement), this.parallaxData.scrollingEl.addEventListener("scroll", this.onScroll)) : document.addEventListener("scroll", this.onScroll);
    },
    disableParallax() {
      (this.pageScrollingElement ? document.querySelector(this.pageScrollingElement) : document).removeEventListener("scroll", this.onScroll), this.parallaxData.scrollingEl = null, this.parallaxData.isVisible = false, this.parallaxData.translation = 0, this.parallaxData.slideshowOffsetTop = null;
    },
    onScroll() {
      const { scrollingEl: e } = this.parallaxData, s = document.documentElement;
      let i = 0;
      e ? i = e.scrollTop : i = (window.pageYOffset || s.scrollTop) - (s.clientTop || 0);
      const l = window.innerHeight || s.clientHeight || document.body.clientHeight, o = this.container.clientHeight, t = this.getSlideshowOffsetTop(), u = t + o - i, v = l + i - t;
      if (this.parallaxData.isVisible = u > 0 && v > 0, this.parallaxData.isVisible) {
        const c = l + o, a = u * 100 / c, h = this.conf.parallax === -1 ? 100 - a : a;
        this.parallaxData.translation = -h / 2;
      }
    },
    onResize() {
      if (this.breakpointsData.list.length) {
        const e = this.getCurrentBreakpoint();
        this.hasBreakpointChanged(e) && this.setBreakpointConfig(e);
      }
      this.conf.parallax && this.getSlideshowOffsetTop(true);
    },
    onMouseEnter() {
      this.mouseOver = true, this.conf.pauseOnHover && this.conf.autoplay && (this.isPaused = true);
    },
    onMouseLeave() {
      this.mouseOver = false, this.conf.pauseOnHover && this.conf.autoplay && (this.isPaused = false);
    },
    onMouseDown(e) {
      !this.touchEnabled || this.disable || (!e.touches && this.preventYScroll && e.preventDefault(), this.mouseDown = true, this.touch.dragStartX = this.getCurrentMouseX(e), this.conf.draggingDistance || this.updateTrackTranslation(this.touch.dragStartX));
    },
    onMouseMove(e) {
      if (this.mouseDown || this.touch.dragging)
        if (this.conf.autoplay && (this.isPaused = true), this.preventYScroll && e.preventDefault(), this.mouseDown = false, this.touch.dragging = true, this.touch.dragNowX = this.getCurrentMouseX(e), this.conf.draggingDistance) {
          this.touch.dragAmount = this.touch.dragNowX - this.touch.dragStartX;
          const s = this.touch.dragAmount / this.container.clientWidth;
          this.updateTrackTranslation(), this.transition.currentTranslation += 100 * s;
        } else
          this.updateTrackTranslation(this.touch.dragNowX);
    },
    onMouseUp(e) {
      if (this.mouseDown = false, this.touch.dragging)
        this.conf.autoplay && (!("ontouchstart" in window) && !this.mouseOver ? this.isPaused = false : this.conf.pauseOnTouch || (this.isPaused = false));
      else
        return this.cancelSlideChange();
      this.touch.dragging = false;
      const s = this.conf.draggingDistance ? -this.touch.dragAmount : 0, i = (this.touch.dragStartX - this.container.offsetLeft) / this.container.clientWidth, l = (this.touch.dragNowX - this.container.offsetLeft) / this.container.clientWidth, o = ((i < 0.5 ? 0 : 1) - l) * 100;
      let t = (s || o) > 0;
      if (this.conf.rtl && (t = !t), [
        Math.abs(s) < this.conf.draggingDistance,
        !this.conf.draggingDistance && Math.abs(o) < 50,
        this.arrowPrevDisabled && !this.slides.current && !t,
        this.arrowNextDisabled && this.slides.current === this.slidesCount - 1 && t
      ].includes(true))
        this.cancelSlideChange();
      else {
        const v = this.slides.current + this.conf.slideMultiple * (t ? 1 : -1);
        this.emit(t ? "next" : "previous"), this.goToSlide(v);
      }
      this.touch.dragStartX = null, this.touch.dragNowX = null, this.touch.dragAmount = null, this.touch.justDragged = true, setTimeout(() => this.touch.justDragged = false, 50), this.touch.lazyloadTriggered = false;
    },
    onSlideshowTouch() {
      this.isPaused = true;
    },
    onOustideTouch() {
      this.isPaused = false;
    },
    justDragged() {
      return this.touch.justDragged;
    },
    cancelSlideChange() {
      this.conf.fade || this.updateTrackTranslation();
    },
    getCurrentMouseX(e) {
      return "ontouchstart" in window ? e.touches[0].clientX : e.clientX;
    },
    getBasicTranslation() {
      return this.slides.current / this.conf.visibleSlides;
    },
    updateTrackTranslation(e = null) {
      let s = this.getBasicTranslation();
      const { infinite: i, visibleSlides: l, slideMultiple: o, gap: t, "3d": u, lazy: v, lazyLoadOnDrag: c } = this.conf;
      if (i && this.nextSlideIsClone !== false && (s = (this.nextSlideIsClone ? this.slidesCount : -1) / l), t && (s += this.gapsCount / (l / o) * t / 100), this.touch.dragStartX && e && !(i && this.nextSlideIsClone !== false)) {
        let a = 0;
        const h = (this.touch.dragStartX - this.container.offsetLeft) / this.container.clientWidth;
        let S = (e - this.container.offsetLeft) / this.container.clientWidth;
        if (u) {
          const p = Math.round(h) ? [0, 2] : [-1, 1];
          S = Math.min(Math.max(S, p[0]), p[1]);
        }
        if (a = (h < 0.5 ? 0 : 1) - S, s += a * (this.conf.rtl ? -1 : 1), v && c && !this.touch.lazyloadTriggered) {
          this.touch.lazyloadTriggered = true;
          let p = this.slides.current + (a > 0 ? 1 : -1) * l;
          i && p === -1 ? p = this.slidesCount - 1 : i && p === this.slidesCount && (p = 0);
          for (let _ = 0; _ < l; _++) {
            const x = this.slides.list[p + _];
            x && !x.loaded && this.loadSlide(x, p + _);
          }
        }
      }
      if (this.multipleSlides1by1 && !i) {
        const a = this.slidePosAfterPreferred > 0;
        let h = Math.min(this.preferredPosition, this.slides.current);
        a && (h += this.slidePosAfterPreferred), s -= h / l;
      }
      this.transition.currentTranslation = -s * 100 * (this.conf.rtl ? -1 : 1);
    },
    pauseAutoplay() {
      this.isPaused = true, clearTimeout(this.autoplayTimer), this.autoplayTimer = 0, this.emit("autoplay-pause");
    },
    resumeAutoplay() {
      this.isPaused = false, this.doAutoplay(), this.emit("autoplay-resume");
    },
    doAutoplay() {
      clearTimeout(this.autoplayTimer), this.autoplayTimer = setTimeout(() => {
        this.goToSlide(this.slides.current + this.conf.slideMultiple, { autoPlaying: true });
      }, this.currentSlide.duration || this.conf.duration);
    },
    previous(e = true) {
      e && this.emit("previous"), this.goToSlide(this.slides.current - this.conf.slideMultiple);
    },
    next(e = true) {
      e && this.emit("next"), this.goToSlide(this.slides.current + this.conf.slideMultiple);
    },
    refreshParallax() {
      setTimeout(() => {
        this.onResize(), this.onScroll();
      }, 100);
    },
    getFirstVisibleSlide(e) {
      const { slideMultiple: s, visibleSlides: i } = this.conf;
      let l = this.slides.current;
      return i > 1 && s === i ? l = Math.floor(e / i) * i : this.multipleSlides1by1 && (l = e - Math.min(e, this.preferredPosition) - Math.max(this.slidePosAfterPreferred, 0)), l;
    },
    getSlideInRange(e, s) {
      let i = false;
      this.conf.infinite && e === -1 ? i = 0 : this.conf.infinite && e === this.slidesCount && (i = 1);
      let l = (e + this.slidesCount) % this.slidesCount;
      if (this.conf.slideMultiple > 1) {
        const o = this.slidesCount % this.conf.slideMultiple || this.conf.slideMultiple, t = this.conf.slideMultiple - o;
        l += e < 0 ? t : 0, l = this.getFirstVisibleSlide(l);
      }
      return this.conf.disableArrowsOnEdges && (e < 0 || e > this.slidesCount - 1) && !s && (l = this.slides.current), { nextSlide: l, clone: i };
    },
    goToSlide(e, { animation: s = true, autoPlaying: i = false, jumping: l = false, breakpointChange: o = false, emit: t = true } = {}) {
      if (!this.slidesCount || this.disable)
        return;
      this.conf.autoplay && !i && !this.isPaused && (this.isPaused = true, this.$nextTick(() => this.isPaused = false)), this.transition.animated = s, setTimeout(() => this.transition.animated = false, this.transitionSpeed);
      const { nextSlide: u, clone: v } = this.getSlideInRange(e, i);
      if (this.nextSlideIsClone = v, !this.slides.list[u])
        return;
      if (this.conf.lazy)
        for (let a = 0; a < this.conf.visibleSlides; a++) {
          const h = this.slides.list[u + a];
          h && !h.loaded && this.loadSlide(h, u + a);
        }
      this.isReady && !l && t && this.emit("before-slide", true, u);
      const c = this.slides.list[u];
      if (this.isReady && c.video) {
        const a = this.slides.list[this.slides.current];
        a.video && a.video.pause(), c.video.play();
      }
      if (v !== false && setTimeout(() => {
        const a = e === -1 && this.slides.current !== this.slidesCount - 1, h = e === this.slidesCount && this.slides.current !== 0;
        a || h || (this.transition.speed = 0, this.goToSlide(v ? 0 : this.slidesCount - 1, { animation: false, jumping: true }), setTimeout(() => this.transition.speed = this.conf.transitionSpeed, 50));
      }, this.transition.speed - 50), this.slides.current = u, this.slides.firstVisible = this.getFirstVisibleSlide(u), o || (this.slides.focus = u), this.conf.fade || this.updateTrackTranslation(), this.slides.activeId = this.slides.list[this.slides.current].id, this.conf.autoplay && i && !this.isPaused && this.doAutoplay(), this.slidesCount && (this.isReady && !l && t && this.emit("slide"), this.isReady && this.conf.bullets && !i && !l && this.$refs.bullets)) {
        const a = this.$refs.bullets.children, h = a && a[this.slides.current / this.conf.slideMultiple];
        if (h && h.nodeName.toLowerCase() === "button") {
          let S = document.documentElement;
          this.pageScrollingElement && (S = document.querySelector(this.pageScrollingElement));
          const p = S.scrollTop;
          h.focus({ preventScroll: true }), S.scrollTop = p;
        }
      }
    },
    addSlide(e) {
      return this.slides.list.push(e), this.isReady && this.slidesCount === 1 && this.conf.autoplay && this.isPaused && (this.isPaused = false), this.slidesCount;
    },
    addClone() {
      return this.updateTrackTranslation(), this.slidesCount;
    },
    updateSlide(e, s) {
      let i = this.slides.list.find((l) => l.id === e);
      i && (i = Object.assign(i, s));
    },
    removeSlide(e) {
      const s = this.slides.list.findIndex((i) => i.id === e);
      s > -1 && (this.slides.list.splice(s, 1), this.slidesCount && e === this.slides.activeId && this.goToSlide(s - 1, { autoPlaying: true })), this.slides.current >= this.slidesCount && this.goToSlide(0, { autoPlaying: true });
    },
    loadSlide(e, s) {
      e.loadImage().then((i) => {
        const { image: l, style: o } = i;
        e.loaded = true, e.image = l, e.style = o, this.$emit("image-loaded", this.getSlideData(s));
      }, () => {
        e.loaded = false, this.$emit("image-failed", this.getSlideData(s));
      });
    },
    toggleTouchableOption(e) {
      const { track: s } = this.$refs;
      if (!s)
        return;
      this.touchEnabled = e;
      const i = "ontouchstart" in window;
      e ? (this.$refs.track.addEventListener(i ? "touchstart" : "mousedown", this.onMouseDown, { passive: !this.preventYScroll }), document.addEventListener(i ? "touchmove" : "mousemove", this.onMouseMove, { passive: !this.preventYScroll }), document.addEventListener(i ? "touchend" : "mouseup", this.onMouseUp, { passive: true })) : this.removeEventListeners();
    },
    removeEventListeners() {
      const e = "ontouchstart" in window;
      this.$refs.track.removeEventListener(e ? "touchstart" : "mousedown", this.onMouseDown, { passive: !this.preventYScroll }), document.removeEventListener(e ? "touchmove" : "mousemove", this.onMouseMove, { passive: !this.preventYScroll }), document.removeEventListener(e ? "touchend" : "mouseup", this.onMouseUp, { passive: true });
    }
  },
  watch: {
    isPaused(e) {
      this[e ? "pauseAutoplay" : "resumeAutoplay"]();
    },
    parallax(e) {
      this[e ? "enableParallax" : "disableParallax"]();
    }
  },
  mounted() {
    this.init();
  },
  beforeUnmount() {
    this.removeEventListeners(), this.conf.parallax && this.disableParallax(), window.removeEventListener("resize", this.onResize), document.removeEventListener("touchstart", (e) => {
      this[this.$el.contains(e.target) ? "onSlideshowTouch" : "onOustideTouch"]();
    }), this.container.removeEventListener("mouseenter", this.onMouseEnter), this.container.removeEventListener("mouseleave", this.onMouseLeave);
  }
};
var be = j(Se, [["render", me]]);
export {
  Z as VueperSlide,
  be as VueperSlides
};
//# sourceMappingURL=vueperslides.js.map
