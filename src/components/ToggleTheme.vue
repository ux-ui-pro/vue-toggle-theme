<script>
import { onMounted, reactive, watch } from 'vue';

export default {
  setup() {
    const state = reactive({
      currentTheme: null,
    });

    const docEl = document.documentElement;

    const setTheme = (theme) => {
      state.currentTheme = theme;
    };

    const updateMetaTheme = () => {
      const metaTheme = document.querySelector('meta[name="theme-color"]');

      const cssVar = getComputedStyle(docEl).getPropertyValue(
        '--meta-theme-color',
      );

      metaTheme.setAttribute('content', cssVar);
    };

    const pickTheme = () => {
      const newTheme = state.currentTheme === 'dark' ? 'light' : 'dark';

      if (state.currentTheme !== newTheme) {
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
      }
    };

    onMounted(() => {
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        setTheme('light');
      }
    });

    watch(
      () => state.currentTheme,
      () => {
        document.documentElement.setAttribute('data-theme', state.currentTheme);

        updateMetaTheme();
      },
    );

    return {
      pickTheme,
      state,
    };
  },
};
</script>

<template>
  <button
    @click="pickTheme"
    v-cloak
    :class="state.currentTheme === 'dark' ? 'theme-dark' : 'theme-light'"
  >
    <slot />
  </button>
</template>
