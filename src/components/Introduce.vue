<!-- Testimonial Start -->
<template>
  <div class="container-fluid testimonial py-5 my-5">
    <div class="container py-5">
        <div class="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
            <p class="fs-3 fw-medium fst-italic text-white">직원소개</p>
            <h1 class="display-6">구급대원 및 응급구조사 소개</h1>
        </div>
        <div class="owl-carousel testimonial-carousel wow fadeInUp visibleFix" data-wow-delay="0.5s">
            
            <div class="testimonial-item p-4 p-lg-5" v-for="item in introduceList" :key="item">
                <p class="mb-4">{{ item.desc }}</p>
                <div class="d-flex align-items-center justify-content-center">
                    <img class="img-fluid flex-shrink-0" :src="item.imgPath" alt="">
                    <div class="text-start ms-3">
                        <h5>{{ item.name }}</h5>
                        <span class="text-primary">{{ item.position }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
    import {computed, ref, onMounted} from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()
    const introduce = store.state.homeStore.introduce;
    const introduceList = ref([
        {
             desc: '운전경력15년 환자의 안전과 생명을 최우선으로 생각하고, 친절히 모시겠습니다.'
            ,imgPath:'./src/assets/images/testimonial-3.jpg'
            ,name:'김동수'
            ,position:'대표이사'
        },
        {
             desc: '운전경력10년 구급차 운전 및 응급구조사 2급 보유 신속, 정확, 안전하게 모시겠습니다.'
            ,imgPath:'./src/assets/images/testimonial-1.jpg'
            ,name:'김지환'
            ,position:'본부장'
        },
        {
             desc: '경력5년 응급구조사, 언제나 환자만을 생각하면 최선을 다하겠습니다.'
            ,imgPath:'./src/assets/images/testimonial-2.jpg'
            ,name:'김소연'
            ,position:'과장'
        },

    ])

    onMounted(() =>{
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            items: 1,
            loop: true,
            dots: true,
            nav: false
        }) 
    })  

</script>