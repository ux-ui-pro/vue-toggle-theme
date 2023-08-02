<script>
export default {
	name: 'ToggleTheme',
	props: {
		defaultTheme: {
			type: String,
			default: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
		}
	},
	data() {
		return {
			theme: this.defaultTheme,
			currentTheme: null,
			docEl: document.documentElement
		}
	},
	mounted() {
		this.setTheme()
	},
	methods: {
		setTheme() {
			this.currentTheme = localStorage.getItem('theme') || this.defaultTheme
			this.docEl.setAttribute('data-theme', this.currentTheme)
			this.docEl.setAttribute('defaulttheme', this.currentTheme)

			this.updateMetaTheme()
		},
		updateMetaTheme() {
			this.metaTheme = document.querySelector('meta[name="theme-color"]')
			this.cssVar = getComputedStyle(this.docEl).getPropertyValue('--meta-theme-color')
			this.metaTheme.setAttribute('content', this.cssVar)
		},
		pickTheme() {
			this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark'
			localStorage.setItem('theme', this.currentTheme)

			this.setTheme()
		}
	},
	computed: {
		themeClasses() {
			return {
				'toggle-theme--dark': this.currentTheme === 'dark',
				'toggle-theme--light': this.currentTheme === 'light'
			}
		}
	}
}
</script>

<template>
	<button
		themecolorlist="light, dark"
		@click="pickTheme"
		class="toggle-theme"
		:class="themeClasses">
		<slot />
	</button>
</template>

<style>
button.toggle-theme {
	font-family: inherit;
	font-size: 100%;
	line-height: 1.15;
	margin: 0; padding: 0;
	overflow: visible;
	border: none;
	background-color: transparent;
	-webkit-appearance: button;
}
</style>