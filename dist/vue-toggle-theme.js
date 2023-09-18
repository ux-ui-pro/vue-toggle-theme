import { ref as u, computed as d, onMounted as h, openBlock as i, createElementBlock as p, normalizeClass as f, renderSlot as k } from "vue";
const g = (o, e) => {
  const r = o.__vccOpts || o;
  for (const [t, a] of e)
    r[t] = a;
  return r;
}, T = {
  name: "DarkMode",
  props: {
    defaultTheme: {
      type: String,
      default: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
  },
  setup(o) {
    const e = u(null), r = document.documentElement;
    let t = !1;
    const a = () => {
      r.setAttribute("data-theme", e.value), s();
    }, s = () => {
      const c = document.querySelector('meta[name="theme-color"]'), m = getComputedStyle(r).getPropertyValue("--meta-theme-color");
      c.setAttribute("content", m);
    }, l = () => {
      t || (t = !0, e.value = e.value === "dark" ? "light" : "dark", localStorage.setItem("theme", e.value), a(), setTimeout(() => {
        t = !1;
      }, 300));
    }, n = d(() => ({
      "theme-dark": e.value === "dark",
      "theme-light": e.value === "light"
    }));
    return h(() => {
      e.value = localStorage.getItem("theme") || o.defaultTheme, a();
    }), {
      themeClasses: n,
      pickTheme: l
    };
  }
};
function v(o, e, r, t, a, s) {
  return i(), p("button", {
    class: f(t.themeClasses),
    onClick: e[0] || (e[0] = (...l) => t.pickTheme && t.pickTheme(...l))
  }, [
    k(o.$slots, "default")
  ], 2);
}
const S = /* @__PURE__ */ g(T, [["render", v]]);
export {
  S as default
};
