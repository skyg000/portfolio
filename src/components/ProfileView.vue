<template>
  <div class="profile">
    
    <div class="p_info">
      <div class="title">
        <a href="/"><h2> HSH portfolio </h2></a>  
        </div>
      <img alt="Myimg" src="../../public/img/myimg1.jpg" />
      <div class="media">
        <p class="job"> PUBLISHER & FRONTEND
          <router-link to="/Contact" class="airlink">
            <img class="aircontact" src="../../public/img/air.png">
          </router-link>
         <!--  <a href="./Contact" class="airlink">
          </a> -->
        </p>
        <div class="greetings">
          <p>안녕하세요. <br>
            <span class="v">항상 화이팅 하는</span> <br>
            Front-End Developer
            <span class="v">홍석현</span>
            입니다.
          </p>
        </div>
        <div class="p-info">
          <p class="cimg">
            <a href="mailto:skyg000@naver.com" class="mail">
              E-mail : skyg000@naver.com
            </a>
          </p>
          <p class="cimg">
            Phone : 010-4222-1318
          </p>
        </div>
      </div>

    </div>
  </div>
  <div class="line">
    <div class="route">
      <router-link to="/">A</router-link>
      <router-link to="/Skill">S</router-link>
      <router-link to="/Work">P</router-link>
      <router-link to="/Contact">C</router-link>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      active: true,
      pdfPath: '/public/pdf/resume.pdf',

      name: 'HelloWorld',
      props: {
        msg: String
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '/src/assets/css/Profile.scss';
</style>
