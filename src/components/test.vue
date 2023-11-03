<template>
    <div class="work">
        <h2> WORK </h2>
        <swiper :cssMode="true" :navigation="true" :pagination="true" :mousewheel="true" :keyboard="true" :loop="true"
            :modules="modules" class="mySwiper">
            <swiper-slide><img src="../../public/img/work/toeat.png"></swiper-slide>
            <swiper-slide><img src="../../public/img/work/toeat.png"></swiper-slide>
            <swiper-slide><img src="../../public/img/work/toeat.png"></swiper-slide>
            <swiper-slide><img src="../../public/img/work/toeat.png"></swiper-slide>
            <swiper-slide><img src="../../public/img/work/toeat.png"></swiper-slide>
            <swiper-slide><img src="../../public/img/work/toeat.png"></swiper-slide>
            <swiper-slide><img src="../../public/img/work/toeat.png"></swiper-slide>
            <swiper-slide><img src="../../public/img/work/toeat.png"></swiper-slide>
            <swiper-slide><img src="../../public/img/work/toeat.png"></swiper-slide>
        </swiper>
        <div class="worktotal">
            <div class="worktitle">
                <b> To Eat (서울 맛집지도)  제작 : 2023. 07 </b>
                <p class="workday"> </p>
            </div>
            <div class="worktext">
                <p class="workskill"> 주요 기술 </p>
                <hr>
                <p class="workskilltxt"> HTML / SCSS / SCRIPT </p>
                <p class="workplan"> 기획 의도 </p>
                <hr>
                <p class="workplantxt">
                    서울의 맛집을 소개하는 컨셉 으로 사이트를 선정 하였습니다. <br>
                    맛집 찾기를 하는 경우 포털 검색을 이용하면서 여러 블로그  등을 찾아 보고
                    맛집이라고 소개된 곳에 가면 소개된 내용과 다른 적이 있습니다.<br>
                    사용자의 불편함을 해소 하고 사용자가 원하는 맛집을 찾을 수 있도록
                    믿을 만한 데이터를 제공 하고자 선정 하였습니다.</p>
            </div>
            <div class="link">
                <p class="gitlink"> <a href="https://github.com/skyg000/ToEat" target="_blank">GitHub 링크 :
                        https://github.com/skyg000/ToEat</a> </p>
                <p class="workurl"> <a href="https://skyg000.github.io/ToEat/" target="_blank">배포 링크 :
                        https://skyg000.github.io/ToEat/</a> </p>
            </div>
        </div>
    </div>
</template>
    
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../assets/css/swstyle.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
export default {
    name: 'WorkView',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Pagination, Mousewheel, Keyboard],
        };
    },
}
</script>
<style lang="scss">
@import '/src/assets/css/Work.scss';
</style>
    