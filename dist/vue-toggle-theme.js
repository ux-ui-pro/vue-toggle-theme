import { openBlock as s, createElementBlock as c, normalizeClass as a, renderSlot as n } from "vue";
const u = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [m, o] of t)
    r[m] = o;
  return r;
}, i = {
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
    this.setTheme();
  },
  methods: {
    setTheme() {
      this.currentTheme = localStorage.getItem("theme") || this.defaultTheme, this.docEl.setAttribute("data-theme", this.currentTheme), this.docEl.setAttribute("defaulttheme", this.currentTheme), this.metaTheme();
    },
    metaTheme() {
      this.currentTheme = localStorage.getItem("theme") || this.defaultTheme, this.metaThemeColor = document.querySelector('meta[name="theme-color"]');
      const e = getComputedStyle(document.documentElement), t = e.getPropertyValue("--meta-theme-color-dark"), r = e.getPropertyValue("--theme-theme-color-light"), m = { dark: t, light: r };
      this.metaThemeColor.setAttribute("content", m[this.currentTheme].trim());
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
function d(e, t, r, m, o, h) {
  return s(), c("button", {
    themecolorlist: "light, dark",
    onClick: t[0] || (t[0] = (...l) => h.pickTheme && h.pickTheme(...l)),
    class: a(["toggle-theme", h.themeClasses])
  }, [
    n(e.$slots, "default")
  ], 2);
}
const g = /* @__PURE__ */ u(i, [["render", d]]);
export {
  g as default
};
