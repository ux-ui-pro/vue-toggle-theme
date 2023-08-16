<script>
import { ref, onMounted, computed } from 'vue'

export default {
	name: 'ToggleTheme',
	props: {
		defaultTheme: {
			type: String,
			default: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
		}
	},
	setup(props) {
		const currentTheme = ref(null)
		const docEl = document.documentElement

		let isThrottled = false

		const setTheme = () => {
			docEl.setAttribute('data-theme', currentTheme.value)
			updateMetaTheme()
		}

		const updateMetaTheme = () => {
			const metaTheme = document.querySelector('meta[name="theme-color"]')
			const cssVar = getComputedStyle(docEl).getPropertyValue('--meta-theme-color')

			metaTheme.setAttribute('content', cssVar)
		}

		const pickTheme = () => {
			if (isThrottled) return

			isThrottled = true

			currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
			localStorage.setItem('theme', currentTheme.value)

			setTheme()

			setTimeout(() => { isThrottled = false }, 300)
		}

		const themeClasses = computed(() => ({
			'toggle-theme--dark': currentTheme.value === 'dark',
			'toggle-theme--light': currentTheme.value === 'light'
		}))

		onMounted(() => {
			currentTheme.value = localStorage.getItem('theme') || props.defaultTheme
			setTheme()
		})

		return {
			themeClasses,
			pickTheme
		}
	}
}
</script>

<template>
	<button
		class="toggle-theme"
		:class="themeClasses"
		@click="pickTheme"
	>
		<slot />
	</button>
</template>

<style scoped>
.toggle-theme {
	font-family: inherit;
	font-size: 100%;
	line-height: 1.15;
	margin: 0;
	padding: 0;
	overflow: visible;
	border: none;
	text-transform: none;
	-webkit-appearance: button;
}
</style>