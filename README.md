<div align="center">
<br>
<h1>vue-toggle-theme</h1>
<p>A component that helps to implement dark mode in your Vue application</p>

[![npm](https://img.shields.io/npm/v/vue-toggle-theme.svg?colorB=brightgreen)](https://www.npmjs.com/package/vue-toggle-theme)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/vue-toggle-theme.svg)](https://github.com/ux-ui-pro/vue-toggle-theme)
[![NPM Downloads](https://img.shields.io/npm/dm/vue-toggle-theme.svg?style=flat)](https://www.npmjs.org/package/vue-toggle-theme)

<p><sup>1.4kB gzipped</sup></p>
<h3><a href="https://9ddmm6.csb.app/">Demo</a></h3>
</div>
<br>

## Install
```
$ yarn add vue-toggle-theme
```
<br>

## Use
<p><sub>*.vue</sub></p>

```vue
<template lang="html">
	<div>
		<ToggleTheme :defaultTheme="'light'" />
	</div>
</template>

<script>
import ToggleTheme from 'vue-toggle-theme'
import 'vue-toggle-theme/dist/index.css'

export default {
	components: {
		ToggleTheme
	}
}
</script>
```
<p><sub>*.css</sub></p>

```css
:root {
    --toggle-theme-duration: 375ms;
    --toggle-theme-color-icon: Black;
}

[data-theme='dark'] {
    --toggle-theme-color-icon: White;
}
```
<br>

## Options
| Attribute        | Type       | Default    | Values              | Description                                                                                    |
| :--------------- | :--------: | :--------: | :-----------------: | :--------------------------------------------------------------------------------------------: |
| `defaultTheme`   |   String   |    null    |  `light` or `dark`  | Sets the default theme. If `null`, the theme installed on the user's device will be selected.  |
<br>

## License
vue-toggle-theme is released under MIT license