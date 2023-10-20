<br>
<p align="center"><strong>vue-toggle-theme</strong></p>

<div align="center">

[![npm](https://img.shields.io/npm/v/vue-toggle-theme.svg?colorB=brightgreen)](https://www.npmjs.com/package/vue-toggle-theme)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/vue-toggle-theme.svg)](https://github.com/ux-ui-pro/vue-toggle-theme)
[![NPM Downloads](https://img.shields.io/npm/dm/vue-toggle-theme.svg?style=flat)](https://www.npmjs.org/package/vue-toggle-theme)

</div>

<p align="center">A Vue 3 component that adds a dark mode.<br>Allows you to switch color schemes using the user's color scheme<br>or by setting a predefined one, and save the selected theme to localStorage.</p>
<p align="center"><sup>600B gzipped</sup></p>
<p align="center"><a href="https://9ddmm6.csb.app/">Demo</a></p>
<br>

&#10148; **Install**

```console
yarn add vue-toggle-theme
```
<br>

&#10148; **Usage**

`defaultTheme` accepts the values `light` or `dark`. If no value is specified, the user's theme will be used.
```vue
<template>
  <ToggleTheme :defaultTheme="'light'">
    <svg>...</svg>
  </ToggleTheme>
</template>

<script>
import ToggleTheme from 'vue-toggle-theme'

export default {
  components: {
    ToggleTheme
  }
}
</script>
```
<br>

Add a `<meta>` element with the theme-color attribute to the `<head>` section.
```html
<meta name="theme-color" content="">
```
```css
:root {
  --meta-theme-color: White;
}

[data-theme='dark'] {
  --meta-theme-color: Black;
}
```
<br>

Fix "[flash of inaccurate color theme](https://css-tricks.com/flash-of-inaccurate-color-theme-fart/)".
```html
<script>
  const e = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
    t = localStorage.getItem("theme") || e,
    a = document.documentElement;
  a.setAttribute("data-theme", t), localStorage.setItem("theme", t);
</script>
```
<br>

&#10148; **License**

vue-toggle-theme is released under MIT license