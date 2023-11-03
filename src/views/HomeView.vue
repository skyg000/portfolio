<template>
  <div class="home">
    <ProfileView/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileView from '../components/ProfileView.vue'

export default {
  name: 'HomeView',
  components: {
    ProfileView
  }
}
</script>
