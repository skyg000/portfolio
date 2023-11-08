<template>
  <div class="skill">
    <h2> SKILL </h2>
    <div class="skill_icon">
      <figure class="skill_img">
        <div class="s_count">
          <img src="../../public/img/icons/skillicon/html.png" />
          <p>{{ skillpoint.html }}%</p>
        </div>
        <div class="s_count">
          <img src="../../public/img/icons/skillicon/css.png" />
          <p>{{ skillpoint.css }}%</p>
        </div>
        <div class="s_count">
          <img src="../../public/img/icons/skillicon/scss.png" />
          <p>{{ skillpoint.scss }}%</p>
        </div>
        <div class="s_count">
          <img src="../../public/img/icons/skillicon/jscript.png" /> <br>
          <p>{{ skillpoint.js }}%</p>
        </div>
        <div class="s_count">
          <img src="../../public/img/icons/skillicon/react.png" />
          <p>{{ skillpoint.react }}%</p>
        </div>
        <div class="s_count">
          <img src="../../public/img/icons/skillicon/vue.png" />
          <p>{{ skillpoint.vue }}%</p>
        </div>
        <div class="s_count">
          <img src="../../public/img/icons/skillicon/nextjs.png" /> <br>
          <p>{{ skillpoint.next }}%</p>
        </div>
        <div class="s_count">
          <img src="../../public/img/icons/skillicon/mysql.png" />
          <p>{{ skillpoint.mysql }}%</p>
        </div>
        <div class="s_count">
          <img src="../../public/img/icons/skillicon/maria.png" />
          <p>{{ skillpoint.maria }}%</p>
        </div>
        <div class="s_count">
          <img src="../../public/img/icons/skillicon/mongo.png" /> <br>
          <p>{{ skillpoint.mongo }}%</p>
        </div>
        <div class="s_count">
          <img src="../../public/img/icons/skillicon/github.png" />
          <p>{{ skillpoint.git }}%</p>
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
  