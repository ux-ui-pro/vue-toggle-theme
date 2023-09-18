<script>
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'DarkMode',
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
      'theme-dark': currentTheme.value === 'dark',
      'theme-light': currentTheme.value === 'light'
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
    :class="themeClasses"
    @click="pickTheme"
  >
    <slot />
  </button>
</template>