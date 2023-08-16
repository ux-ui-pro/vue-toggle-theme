<div align="center">
<br>
<h1>vue-toggle-theme</h1>
<p>A component that helps to implement dark mode in your Vue application</p>

[![npm](https://img.shields.io/npm/v/vue-toggle-theme.svg?colorB=brightgreen)](https://www.npmjs.com/package/vue-toggle-theme)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/vue-toggle-theme.svg)](https://github.com/ux-ui-pro/vue-toggle-theme)
[![NPM Downloads](https://img.shields.io/npm/dm/vue-toggle-theme.svg?style=flat)](https://www.npmjs.org/package/vue-toggle-theme)

<p><sup>700B gzipped</sup></p>
<h3><a href="https://9ddmm6.csb.app/">Demo</a></h3>
</div>
<br>

## Install
```
$ yarn add vue-toggle-theme
```
<br>

## Use
```vue
<template>
	<ToggleTheme :defaultTheme="'light'"> // light or dark
		<svg>...</svg>
	</ToggleTheme>
</template>

<script>
import ToggleTheme from 'vue-toggle-theme'
import 'vue-toggle-theme/dist/style.css'

export default {
	components: {
		ToggleTheme
	}
}
</script>
```
<br>

## meta theme-color
Add `<meta name="theme-color" content="">` to the `<head>` section.

Add CSS variable `--meta-theme-color`
```css
:root {
    --meta-theme-color: White;
}

[data-theme='dark'] {
    --meta-theme-color: Black;
}
```
<br>

## License
vue-toggle-theme is released under MIT license