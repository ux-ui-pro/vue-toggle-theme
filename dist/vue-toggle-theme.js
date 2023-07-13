import { openBlock as l, createElementBlock as a, normalizeClass as i, createElementVNode as o, pushScopeId as d, popScopeId as u } from "vue";
const g = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [h, m] of t)
    r[h] = m;
  return r;
}, p = {
  name: "ToggleTheme",
  props: {
    defaultTheme: {
      type: String,
      default: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
  },
  data() {
    return {
      theme: this.defaultTheme,
      metaThemeColor: null,
      currentTheme: null,
      docEl: document.documentElement
    };
  },
  mounted() {
    try {
      this.setTheme();
    } catch (e) {
      console.error("Error set the theme:", e);
    }
  },
  methods: {
    setTheme() {
      try {
        this.currentTheme = localStorage.getItem("theme") || this.defaultTheme, this.docEl.setAttribute("data-theme", this.currentTheme), this.docEl.setAttribute("defaulttheme", this.currentTheme), this.metaTheme();
      } catch (e) {
        console.error("Error set the theme:", e);
      }
    },
    metaTheme() {
      try {
        this.currentTheme = localStorage.getItem("theme") || this.defaultTheme, this.metaThemeColor = document.querySelector('meta[name="theme-color"]');
        const e = getComputedStyle(document.documentElement), t = e.getPropertyValue("--meta-theme-color-dark"), r = e.getPropertyValue("--theme-theme-color-light"), h = { dark: t, light: r };
        this.metaThemeColor.setAttribute("content", h[this.currentTheme].trim());
      } catch (e) {
        console.error("Error when setting the color in the meta tag:", e);
      }
    },
    pickTheme() {
      try {
        this.currentTheme = this.currentTheme === "dark" ? "light" : "dark", localStorage.setItem("theme", this.currentTheme), this.setTheme();
      } catch (e) {
        console.error("Error when changing the theme:", e);
      }
    }
  },
  computed: {
    themeClasses() {
      return {
        "toggle-theme--dark": this.currentTheme === "dark",
        "toggle-theme--light": this.currentTheme === "light"
      };
    }
  }
}, s = (e) => (d("data-v-66dd950c"), e = e(), u(), e), _ = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  width: "24px",
  height: "24px",
  fill: "none",
  class: "toggle-theme__svg",
  viewBox: "0 0 32 32"
}, T = /* @__PURE__ */ s(() => /* @__PURE__ */ o("clipPath", { id: "toggle-theme__path" }, [
  /* @__PURE__ */ o("path", { d: "M0-11h25a1 1 0 0017 13v30H0Z" })
], -1)), k = ["clip-path"], f = /* @__PURE__ */ s(() => /* @__PURE__ */ o("circle", {
  cx: "16",
  cy: "16",
  r: "8.4"
}, null, -1)), S = /* @__PURE__ */ s(() => /* @__PURE__ */ o("path", { d: "M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z" }, null, -1)), y = [
  f,
  S
];
function v(e, t, r, h, m, c) {
  return l(), a("button", {
    themecolorlist: "light, dark",
    onClick: t[0] || (t[0] = (...n) => c.pickTheme && c.pickTheme(...n)),
    class: i(["toggle-theme", c.themeClasses])
  }, [
    (l(), a("svg", _, [
      T,
      o("g", { "clip-path": "url(#toggle-theme__path)" }, y, 8, k)
    ]))
  ], 2);
}
const E = /* @__PURE__ */ g(p, [["render", v], ["__scopeId", "data-v-66dd950c"]]);
export {
  E as default
};
