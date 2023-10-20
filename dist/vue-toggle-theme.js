import { reactive as s, onMounted as a, watch as l, openBlock as h, createElementBlock as u, normalizeClass as d, renderSlot as i } from "vue";
const T = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [r, c] of n)
    o[r] = c;
  return o;
}, p = {
  setup() {
    const e = s({
      currentTheme: null
    }), n = document.documentElement, o = (t) => {
      e.currentTheme = t;
    }, r = () => {
      const t = document.querySelector('meta[name="theme-color"]'), m = getComputedStyle(n).getPropertyValue(
        "--meta-theme-color"
      );
      t.setAttribute("content", m);
    }, c = () => {
      const t = e.currentTheme === "dark" ? "light" : "dark";
      e.currentTheme !== t && (localStorage.setItem("theme", t), o(t));
    };
    return a(() => {
      const t = localStorage.getItem("theme");
      o(t || "light");
    }), l(
      () => e.currentTheme,
      () => {
        document.documentElement.setAttribute("data-theme", e.currentTheme), r();
      }
    ), {
      pickTheme: c,
      state: e
    };
  }
};
function g(e, n, o, r, c, t) {
  return h(), u("button", {
    onClick: n[0] || (n[0] = (...m) => r.pickTheme && r.pickTheme(...m)),
    class: d(r.state.currentTheme === "dark" ? "theme-dark" : "theme-light")
  }, [
    i(e.$slots, "default")
  ], 2);
}
const f = /* @__PURE__ */ T(p, [["render", g]]);
export {
  f as default
};
