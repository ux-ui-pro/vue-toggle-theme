import { ref as m, computed as i, onMounted as h, onUnmounted as p, openBlock as f, createElementBlock as k, normalizeClass as v, renderSlot as g } from "vue";
const T = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [a, n] of e)
    t[a] = n;
  return t;
}, _ = {
  name: "DarkMode",
  props: {
    defaultTheme: {
      type: String,
      default: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
  },
  setup(o) {
    const e = m(null), t = m(null), a = document.documentElement, n = () => {
      a.setAttribute("data-theme", e.value), r();
    }, r = () => {
      const u = document.querySelector('meta[name="theme-color"]'), d = getComputedStyle(a).getPropertyValue(
        "--meta-theme-color"
      );
      u.setAttribute("content", d);
    }, l = () => {
      n(), t.value = requestAnimationFrame(l);
    }, c = () => {
      t.value && cancelAnimationFrame(t.value), e.value = e.value === "dark" ? "light" : "dark", localStorage.setItem("theme", e.value), l();
    }, s = i(() => ({
      "theme-dark": e.value === "dark",
      "theme-light": e.value === "light"
    }));
    return h(() => {
      e.value = localStorage.getItem("theme") || o.defaultTheme, n(), l();
    }), p(() => {
      t.value && cancelAnimationFrame(t.value);
    }), {
      themeClasses: s,
      pickTheme: c
    };
  }
};
function S(o, e, t, a, n, r) {
  return f(), k("button", {
    class: v(a.themeClasses),
    onClick: e[0] || (e[0] = (...l) => a.pickTheme && a.pickTheme(...l))
  }, [
    g(o.$slots, "default")
  ], 2);
}
const A = /* @__PURE__ */ T(_, [["render", S]]);
export {
  A as default
};
