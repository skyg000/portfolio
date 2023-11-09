<template >
     <div id="app">
        <div class="flex">
            <div class="mode-toggle" @click="modeToggle" :class="darkDark">
                <div class="toggle">
                    <div id="dark-mode" type="checkbox"></div>
                </div>
            </div>
        </div>
</div>
</template>
<script>
export default {
    data() {
    return {
      darkDark: '' // 초기값을 필요에 따라 지정하세요.
    };
  },
  methods: {
    modeToggle() {
      document.body.classList.toggle('dark-mode');
      this.darkDark = document.body.classList.contains('dark-mode') ? 'dark-mode' : '';
    },
  },
}
</script>
<style lang="scss">
    @import '/src/assets/css/Dark.scss';
</style>