<template>
  <div class="skill">
    <h2> SKILL </h2>
    <div class="skill_icon">
      <figure class="skill_img">
        <div class="use">
          <h3>활용 할 줄 알아요</h3>
          <img src="../../public/img/icons/skillicon/html.png" />
          <img src="../../public/img/icons/skillicon/css.png" />
          <img src="../../public/img/icons/skillicon/scss.png" />
          <img src="../../public/img/icons/skillicon/jscript.png" />
          <img src="../../public/img/icons/skillicon/react.png" />
          <img src="../../public/img/icons/skillicon/nextjs.png" /> 
          <img src="../../public/img/icons/skillicon/figma1.png" /> 
          <img src="../../public/img/icons/skillicon/github.png" />
          <img src="../../public/img/icons/skillicon/vercel.jpg" />
        </div>
        <div class="lowuse">
          <h3> 활용해 봤어요</h3>
          <img src="../../public/img/icons/skillicon/vue.png" />
          <img src="../../public/img/icons/skillicon/mysql.png" />
          <img src="../../public/img/icons/skillicon/maria.png" />
          <img src="../../public/img/icons/skillicon/mongo.png" /> 
        </div>
      </figure>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      skillpoint: {
        html: 90,
        css: 90,
        scss: 90,
        js: 70,
        react: 80,
        vue: 60,
        next: 80,
        mysql: 70,
        maria: 70,
        mongo: 60,
        git: 80
      },
      intervals: {}
    }
  },
  name: 'SkillView',
  components: {},
  methods: {
    count(skill) {
      const elInter = document.querySelectorAll('.s_count p');
      this.intervals[skill] = setInterval(() => {
          if (this.skillpoint[skill] <= [skill]) {
            this.skillpoint[skill]++;
            elInter.innerText=`${this.skillpoint}%`;
          }else
            clearInterval(this.intervals[skill]);
          
      }, 100)
    },
  },
  mounted() {
    const skillKeys = Object.keys(this.skillpoint);
    for (const skill of skillKeys) {
      this.count(skill);
    }
  }
}

</script>
<style lang="scss">
@import '/src/assets/css/Skill.scss';
</style>
  