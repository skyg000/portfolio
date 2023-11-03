<template>
    <div class="work">
        <h2> WORK </h2>
        <swiper class="mySwiper" :pagination="{
            clickable: true,
        }" :loop='true' :navigation="true" :modules="modules">
            <swiper-slide class="flex">
                <swiper class="mySwiper2"  :pagination="{ clickable: true, }" :loop='true' :autoplay="{delay: 1500,disableOnInteraction: false,}" :modules="modules">
                    <swiper-slide><img src="../../public/img/work/toeat/toeat.png"></swiper-slide>
                    <swiper-slide><img src="../../public/img/work/toeat/cours.png"></swiper-slide>
                    <swiper-slide><img src="../../public/img/work/toeat/watch.png"></swiper-slide>
                    <swiper-slide><img src="../../public/img/work/toeat/pick.png"></swiper-slide>
                    <swiper-slide><img src="../../public/img/work/toeat/review.png"></swiper-slide>
                    <swiper-slide><img src="../../public/img/work/toeat/recommend.png"></swiper-slide>
                    <swiper-slide><img src="../../public/img/work/toeat/detail.png"></swiper-slide>
                </swiper>
                <div class="worktotal">
                    <div class="worktitle">
                        <b> To Eat (서울 맛집지도)</b>
                        <p class="produce">제작 : 2023. 07월</p>
                    </div>
                    <div class="worktext">
                        <p class="workskill"> 주요 기술 </p>
                        <hr>
                        <p class="workskilltxt"> HTML / SCSS / SCRIPT </p>
                        <p class="workplan"> 기획 의도 </p>
                        <hr>
                        <p class="workplantxt">
                            포털 검색을 이용하면서 여러 블로그를 찾아 보고
                            맛집이라고 소개된 곳에 가면 소개된 내용과 다른 적이 있습니다.
                            사용자의 불편함을 해소 하고 사용자가 원하는 맛집을 찾을 수 있도록
                            믿을 만한 데이터를 제공 하고자 선정 하였습니다.</p>
                        <p class="workres"> 담당업무 </p>
                        <hr>
                        <p class="workplanrestxt">
                            기획 / 관심목록 / 상세보기    
                        </p>
                    </div>
                    <div class="link">
                        <p class="gitlink"> <a href="https://github.com/skyg000/ToEat" target="_blank">GitHub 링크 <br>
                                https://github.com/skyg000/ToEat</a> </p>
                        <p class="workurl"> <a href="https://skyg000.github.io/ToEat/" target="_blank">배포 링크 <br>
                                https://skyg000.github.io/ToEat/</a> </p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="flex">
                <swiper class="mySwiper2" :autoplay="{delay: 1500,disableOnInteraction: false,}" :loop='true' :pagination="{ clickable: true, }" :modules="modules">
                    <swiper-slide><img src="../../public/img/work/calendar/calendar.png"></swiper-slide>
                    <swiper-slide><img src="../../public/img/work/calendar/main.png"></swiper-slide>
                    <swiper-slide><img src="../../public/img/work/calendar/diary.png"></swiper-slide>
                    <swiper-slide><img src="../../public/img/work/calendar/schedule.png"></swiper-slide>
                </swiper>
                <div class="worktotal">
                    <div class="worktitle">
                        <b> 나의하루 (일정관리) </b>
                        <p class="produce">제작 : 2023. 09월</p>
                    </div>
                    <div class="worktext">
                        <p class="workskill"> 주요 기술 </p>
                        <hr>
                        <p class="workskilltxt"> HTML / SCSS / REACT / PWA </p>
                        <p class="workplan"> 기획 의도 </p>
                        <hr>
                        <p class="workplantxt">
                            캘린더를 기반으로 개인 일정 정리가 가능하며, 
                            다이어리 형식으로 하루를 기록해 관리 합니다.
                        </p>
                        <p class="workres"> 담당업무 </p>
                        <hr>
                        <p class="workplanrestxt">
                            기획 / 디자인 / 전체 페이지 
                        </p>
                    </div>
                    <div class="link">
                        <p class="gitlink"> <a href="https://github.com/skyg000/react-calendar" target="_blank">GitHub 링크 <br>
                            https://github.com/skyg000/react-calendar</a> </p> 
                        <p class="workurl"> <a href="https://skyg000.github.io/react-calendar/" target="_blank">배포 링크 <br>
                            https://skyg000.github.io/react-calendar/</a> </p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="flex">
                <swiper class="mySwiper2" :autoplay="{delay: 1500,disableOnInteraction: false,}" :loop='true' :pagination="{ clickable: true, }" :modules="modules">
                    <swiper-slide><img src="../../public/img/work/b3o2/main.png"></swiper-slide>
                    <swiper-slide><img src="../../public/img/12.jpg"></swiper-slide>
                    <swiper-slide><img src="../../public/img/13.jpg"></swiper-slide>
                    <swiper-slide><img src="../../public/img/14.jpg"></swiper-slide>
                    <swiper-slide><img src="../../public/img/15.jpg"></swiper-slide>
                </swiper>
                <div class="worktotal">
                    <div class="worktitle">
                        <b> 별별연인 (사주를 통한 소개팅 앱) </b>
                        <p class="produce">제작 : 2023. 10월</p>
                    </div>
                    <div class="worktext">
                        <p class="workskill"> 주요 기술 </p>
                        <hr>
                        <p class="workskilltxt"> HTML / SCSS / NEXT.Js / MySql / MariaDB / PWA</p>
                        <p class="workplan"> 기획 의도 </p>
                        <hr>
                        <p class="workplantxt">
                            기존 웹/앱들은 한가지 컨텐츠만 제공(사주보기 or 소개팅) 하는데 
                            사주보기 + 소개팅 두가지를 합쳐서 사주를 통해 나에게 부족한 부분을 
                            채워 줄 수 있는 상대방의 사주를 소개하고 서로 마음이 맞는다면 소개팅까지 연결하는 서비스 입니다 .
                        </p>
                        <p class="workres"> 담당업무 </p>
                        <hr>
                        <p class="workplanrestxt">
                            기획 / 디자인 / 전체 페이지 
                        </p>
                    </div>
                    <div class="link">
                        <p class="gitlink"> <a href="https://github.com/skyg000/ToEat" target="_blank">
                            GitHub 링크 : https://github.com/skyg000/ToEat</a> </p>
                        <p class="workurl"> <a href="https://skyg000.github.io/ToEat/" target="_blank">
                            배포 링크 : https://skyg000.github.io/ToEat/</a> </p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="flex">
                <swiper class="mySwiper2" :autoplay="{delay: 1500,disableOnInteraction: false,}" :loop='true' :pagination="{ clickable: true, }" :modules="modules">
                    <swiper-slide><img src="../../public/img/work/b3o2/main.png"></swiper-slide>
                    <swiper-slide><img src="../../public/img/12.jpg"></swiper-slide>
                    <swiper-slide><img src="../../public/img/13.jpg"></swiper-slide>
                    <swiper-slide><img src="../../public/img/14.jpg"></swiper-slide>
                    <swiper-slide><img src="../../public/img/15.jpg"></swiper-slide>
                </swiper>
                <div class="worktotal">
                    <div class="worktitle">
                        <b> 포트 폴리오 사이트 </b>
                        <p class="produce">제작 : 2023. 11월</p>
                    </div>
                    <div class="worktext">
                        <p class="workskill"> 주요 기술 </p>
                        <hr>
                        <p class="workskilltxt"> HTML / SCSS / VUE.JS </p>
                        <p class="workplan"> 기획 의도 </p>
                        <hr>
                        <p class="workplantxt">
                            기존 웹/앱들은 한가지 컨텐츠만 제공(사주보기 or 소개팅) 하는데 
                            사주보기 + 소개팅 두가지를 합쳐서 사주를 통해 나에게 부족한 부분을 
                            채워 줄 수 있는 상대방의 사주를 소개하고 서로 마음이 맞는다면 소개팅까지 연결하는 서비스 입니다 .
                        </p>
                        <p class="workres"> 담당업무 </p>
                        <hr>
                        <p class="workplanrestxt">
                            기획 / 디자인 / 전체 페이지 
                        </p>
                    </div>
                    <div class="link">
                        <p class="gitlink"> <a href="https://github.com/skyg000/ToEat" target="_blank">
                            GitHub 링크 : https://github.com/skyg000/ToEat</a> </p>
                        <p class="workurl"> <a href="https://skyg000.github.io/ToEat/" target="_blank">
                            배포 링크 : https://skyg000.github.io/ToEat/</a> </p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Pagination,Navigation,Autoplay } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination,Navigation,Autoplay],
        };
    },
};
</script>
<style lang="scss">
@import '/src/assets/css/Work.scss';

</style>