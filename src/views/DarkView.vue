<template >
    <div id="darkapp">
        <div class="flex">
            <div class="mode-toggle" @click="modeToggle" :class="darkDark">
                <div class="toggle">
                    <div id="dark-mode" type="checkbox" class="dark-mode" >
                        <img src="../../public/img/icons/bulb.png" class="bulb"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {
            darkDark: '' 
        };
    },
    computed:{
        ...mapState(["dark"])
    },
    methods: {
        ...mapMutations(["setDark"]),
        darkModeEdit(){
            this.setDark(true);
        },
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