<template>
  <div class="profile">
    <div class="p_info">
      <img alt="Myimg" src="../../public/img/16.jpg"/>
      <p class="job"> PUBLISHER & FRONTEND 
        <a href="./Contact" class="airlink">
          <img class="aircontact" src="../../public/img/air.png">
        </a>
        <img class="Vector" src="../../public/img/Vector.png">
      </p>
      <p class="greetings"> 안녕하세요. <br>
          <span class="v">저는 항상 화이팅 하는</span>  <br> 프론트엔드 개발자 홍석현입니다. <br>
          <a href="../../public/img/16.jpg" download="../../public/img/16.jpg">
            <button class="pdf"> 이력서 PDF 
              <img class="down" src="../../public/img/icons/download 1.png"/>
            </button>
          </a>
          
      </p>
    </div>
  </div>
  <div class="line">
    <div class="route">
      <router-link to="/">A</router-link>
      <router-link to="/Skill">S</router-link>
      <router-link to="/Work">W</router-link>
      <router-link to="/Contact">C</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '/src/assets/css/Profile.scss'
</style>
