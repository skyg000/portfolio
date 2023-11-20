<template>
  <div class="contact">
    <h2> CONTACT 
    <a href="./pdf/resume.pdf" download="resume.pdf">
      <button class="pdf"> 이력서 PDF 
        <img class="down" src="../../public/img/icons/download.jpg"/>
      </button>
    </a>
  </h2>
    <p class="cimg">
      <a href="mailto:skyg000@naver.com" class="mail">
      E-mail : skyg000@naver.com 
    </a>
    </p>
    <p class="cimg">
      Phone : 010-4222-1318
    </p>
    <p class="cimg3">
      <a href="https://github.com/skyg000" class="git" target="_blank">
      GitHub : https://github.com/skyg000
    </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  components: {
  }
}
</script>
<style lang="scss">
@import '/src/assets/css/Contact.scss';
</style>
