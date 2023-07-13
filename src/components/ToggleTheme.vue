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
			metaThemeColor: null,
			currentTheme: null,
			docEl: document.documentElement
		}
	},
	mounted() {
		try {
			this.setTheme()
		} catch (error) {
			console.error('Error set the theme:', error)
		}
	},
	methods: {
		setTheme() {
			try {
				this.currentTheme = localStorage.getItem('theme') || this.defaultTheme

				this.docEl.setAttribute('data-theme', this.currentTheme)
				this.docEl.setAttribute('defaulttheme', this.currentTheme)

				this.metaTheme()
			} catch (error) {
				console.error('Error set the theme:', error)
			}
		},
		metaTheme() {
			try {
				this.currentTheme = localStorage.getItem('theme') || this.defaultTheme
				this.metaThemeColor = document.querySelector('meta[name="theme-color"]')

				const css = getComputedStyle(document.documentElement)
				const dark = css.getPropertyValue('--meta-theme-color-dark')
				const light = css.getPropertyValue('--theme-theme-color-light')
				const colors = { dark, light }

				this.metaThemeColor.setAttribute('content', colors[this.currentTheme].trim())
			} catch (error) {
				console.error('Error when setting the color in the meta tag:', error)
			}
		},
		pickTheme() {
			try {
				this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark'

				localStorage.setItem('theme', this.currentTheme)

				this.setTheme()
			} catch (error) {
				console.error('Error when changing the theme:', error)
			}
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
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			width="24px"
			height="24px"
			fill="none"
			class="toggle-theme__svg"
			viewBox="0 0 32 32"
		>
			<clipPath id="toggle-theme__path">
				<path d="M0-11h25a1 1 0 0017 13v30H0Z" />
			</clipPath>
			<g :clip-path="'url(#toggle-theme__path)'">
				<circle cx="16" cy="16" r="8.4" />
				<path d="M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z" />
			</g>
		</svg>
	</button>
</template>

<style lang="scss" scoped>
.toggle-theme {
	cursor: pointer;
	background-color: transparent;
	border-width: 0;
	font-family: inherit;
	font-size: inherit;
	font-style: inherit;
	font-weight: inherit;
	line-height: inherit;
	padding: 0;

	.toggle-theme__svg {
		fill: var(--toggle-theme-color-icon);

		g circle,
		g path {
			transform-origin: center;
			transition: transform calc(var(--toggle-theme-duration) * 0.65) cubic-bezier(0, 0, 0, 1.25) calc(var(--toggle-theme-duration) * 0.35);
		}

		& :first-child path {
			transition-property: transform, d;
			transition-duration: calc(var(--toggle-theme-duration) * 0.6);
			transition-timing-function: cubic-bezier(0, 0, 0.5, 1);
		}
	}

	&--dark {
		.toggle-theme__svg {
			g path {
				transform: scale(0.75);
				transition-delay: 0s;
			}

			g circle {
				transform: scale(1.4);
				transition-delay: 0s;
			}

			& :first-child path {
				d: path("M-9 3h25a1 1 0 0017 13v30H0Z");
				transition-delay: calc(var(--toggle-theme-duration) * 0.4);
				transition-timing-function: cubic-bezier(0, 0, 0, 1.25);
			}
		}

		@supports not(d: path("")) {
			.toggle-theme__svg {
				& :first-child path {
					transform: translate3d(-9px, 14px, 0);
				}
			}
		}
	}
}
</style>