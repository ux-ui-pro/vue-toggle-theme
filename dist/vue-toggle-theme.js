import { openBlock as l, createElementBlock as c, normalizeClass as a, renderSlot as n } from "vue";
const i = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [m, s] of t)
    r[m] = s;
  return r;
}, u = {
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
      currentTheme: null,
      docEl: document.documentElement
    };
  },
  mounted() {
    this.setTheme();
  },
  methods: {
    setTheme() {
      this.currentTheme = localStorage.getItem("theme") || this.defaultTheme, this.metaTheme = document.querySelector('meta[name="theme-color"]'), this.cssVar = getComputedStyle(this.docEl).getPropertyValue("--meta-theme-color"), this.docEl.setAttribute("data-theme", this.currentTheme), this.docEl.setAttribute("defaulttheme", this.currentTheme), this.metaTheme.setAttribute("content", this.cssVar);
    },
    pickTheme() {
      this.currentTheme = this.currentTheme === "dark" ? "light" : "dark", localStorage.setItem("theme", this.currentTheme), this.setTheme();
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
};
function d(e, t, r, m, s, h) {
  return l(), c("button", {
    themecolorlist: "light, dark",
    onClick: t[0] || (t[0] = (...o) => h.pickTheme && h.pickTheme(...o)),
    class: a(["toggle-theme", h.themeClasses])
  }, [
    n(e.$slots, "default")
  ], 2);
}
const g = /* @__PURE__ */ i(u, [["render", d]]);
export {
  g as default
};
