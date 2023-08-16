import { ref as d, computed as u, onMounted as h, openBlock as g, createElementBlock as i, normalizeClass as p, renderSlot as _ } from "vue";
const f = (o, e) => {
  const a = o.__vccOpts || o;
  for (const [t, l] of e)
    a[t] = l;
  return a;
}, T = {
  name: "ToggleTheme",
  props: {
    defaultTheme: {
      type: String,
      default: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
  },
  setup(o) {
    const e = d(null), a = document.documentElement;
    let t = !1;
    const l = () => {
      a.setAttribute("data-theme", e.value), n();
    }, n = () => {
      const c = document.querySelector('meta[name="theme-color"]'), m = getComputedStyle(a).getPropertyValue("--meta-theme-color");
      c.setAttribute("content", m);
    }, r = () => {
      t || (t = !0, e.value = e.value === "dark" ? "light" : "dark", localStorage.setItem("theme", e.value), l(), setTimeout(() => {
        t = !1;
      }, 300));
    }, s = u(() => ({
      "toggle-theme--dark": e.value === "dark",
      "toggle-theme--light": e.value === "light"
    }));
    return h(() => {
      e.value = localStorage.getItem("theme") || o.defaultTheme, l();
    }), {
      themeClasses: s,
      pickTheme: r
    };
  }
};
function k(o, e, a, t, l, n) {
  return g(), i("button", {
    class: p(["toggle-theme", t.themeClasses]),
    onClick: e[0] || (e[0] = (...r) => t.pickTheme && t.pickTheme(...r))
  }, [
    _(o.$slots, "default", {}, void 0, !0)
  ], 2);
}
const y = /* @__PURE__ */ f(T, [["render", k], ["__scopeId", "data-v-5e0d21ad"]]);
export {
  y as default
};
