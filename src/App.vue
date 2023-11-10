<template>
  <HeaderView/>
  <DarkView/>
  <main>
    <div class="fixed">
      <HomeView/>
    </div>
    <div class="comp">
      <router-view/>
    </div>
  </main>
</template>

<script>
  import HeaderView from './components/HeaderView.vue';
  import HomeView from './views/HomeView.vue'
  import DarkView from './views/DarkView.vue'
  export default{
    name:'App',
    components:{
    HeaderView, HomeView,DarkView
    
}
    }
</script>
<style lang="scss">
  @import '/src/assets/css/Profile.scss';
  @import '/src/assets/css/About.scss';
  @import '/src/assets/css/Skill.scss';
  @import '/src/assets/css/Dark.scss';
body {
  margin: 0 ;
  padding: 0;
 
  > #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  .comp{
    background-color: #8DB3B7;
  }
  }
}


</style>
