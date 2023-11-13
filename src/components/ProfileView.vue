<template>
  <div class="profile">
    <div class="p_info">
      <img alt="Myimg" src="../../public/img/16.jpg"/>
      <div class="media">
        <p class="job"> PUBLISHER & FRONTEND 
          <a href="./contact" class="airlink">
            <img class="aircontact" src="../../public/img/air.png">
          </a>
      </p>
      <div class="greetings"> 안녕하세요. <br>
          <span class="v">저는 항상 화이팅 하는</span>  <br> 
          <span class="aa">Front-End Developer 
         <div class="ani">
          <p>홍</p>
          <p>석</p>
          <p>현</p>
          입니다<br>
         </div> 
        </span>
          <a href="./pdf/resume.pdf" download="resume.pdf">
          <button class="pdf"> 이력서 PDF 
            <img class="down" src="../../public/img/icons/download.jpg"/>
          </button>
          </a>
      </div>
      </div>
      
    </div>
  </div>
  <div class="line">
    <div class="route">
      <router-link to="/" >A</router-link>
      <router-link to="/Skill" >S</router-link>
      <router-link to="/Work" >P</router-link>
      <router-link to="/Contact" >C</router-link>
    </div>
  </div>
</template>

<script>

export default {
  
  data(){
    return{
      active:true,
      pdfPath: '/public/pdf/resume.pdf',

  name: 'HelloWorld',
  props: {
    msg: String
  }
}
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '/src/assets/css/Profile.scss';
  a{
    &.router-link-exact-active {
        background-color: #42b983;
      }

  }
</style>
