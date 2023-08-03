<template>
    <!-- Products Start -->
    <div class="container-fluid product py-5">
        <div class="container py-5">
            <div class="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <p class="fs-5 fw-medium fst-italic text-primary">행사소개사진</p>
                <h1 class="fs-4">스포츠, 영화, 각종의료지원, 국토대장정 등.. 다향한 행사의료지원 합니다.  </h1>
            </div>
            <div class="owl-carousel product-carousel wow fadeInUp" data-wow-delay="0.5s">
                <a href="" class="d-block product-item rounded" v-for="item in eventList" :key="item">
                    <img :src="item.imgPath" alt="">
                </a>
            </div>
        </div>
    </div>
    <!-- Products End -->

    <!-- Store Start -->
   <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="store-item position-relative text-center">
                        <img class="img-fluid" src="@/assets/images/event_list_01.jpg" alt="">
                        <div class="p-4">
                            <h4 class="mb-3">내용입력</h4>
                            <p>내용입력</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="store-item position-relative text-center">
                        <img class="img-fluid" src="@/assets/images/event_list_02.jpg" alt="">
                        <div class="p-4">
                            <h4 class="mb-3">내용입력</h4>
                            <p>내용입력</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="store-item position-relative text-center">
                        <img class="img-fluid" src="@/assets/images/event_list_03.jpg" alt="">
                        <div class="p-4">
                            <h4 class="mb-3">내용입력</h4>
                            <p>내용입력</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="store-item position-relative text-center">
                        <img class="img-fluid" src="@/assets/images/event_list_04.jpg" alt="">
                        <div class="p-4">
                            <h4 class="mb-3">내용입력</h4>
                            <p>내용입력</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="store-item position-relative text-center">
                        <img class="img-fluid" src="@/assets/images/event_list_05.jpg" alt="">
                        <div class="p-4">
                            <h4 class="mb-3">내용입력</h4>
                            <p>내용입력</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="store-item position-relative text-center">
                        <img class="img-fluid" src="@/assets/images/event_list_06.jpg" alt="">
                        <div class="p-4">
                            <h4 class="mb-3">내용입력</h4>
                            <p>내용입력</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="store-item position-relative text-center">
                        <img class="img-fluid" src="@/assets/images/event_list_07.jpg" alt="">
                        <div class="p-4">
                            <h4 class="mb-3">내용입력</h4>
                            <p>내용입력</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="store-item position-relative text-center">
                        <img class="img-fluid" src="@/assets/images/event_list_08.jpg" alt="">
                        <div class="p-4">
                            <h4 class="mb-3">내용입력</h4>
                            <p>내용입력</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="store-item position-relative text-center">
                        <img class="img-fluid" src="@/assets/images/event_list_09.jpg" alt="">
                        <div class="p-4">
                            <h4 class="mb-3">내용입력</h4>
                            <p>내용입력</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="store-item position-relative text-center">
                        <img class="img-fluid" src="@/assets/images/event_list_10.jpg" alt="">
                        <div class="p-4">
                            <h4 class="mb-3">내용입력</h4>
                            <p>내용입력</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Store End -->
</template>

<script setup>

    import {ref, onMounted} from 'vue'
    import WOW from 'wow.js'
    const eventList = ref([
        {
             desc: ''
            ,imgPath:'./src/assets/images/event_01.jpg'
            ,name:''
            ,position:''
        },
        {
             desc: ''
            ,imgPath:'./src/assets/images/event_02.jpg'
            ,name:''
            ,position:''
        },
        {
             desc: ''
            ,imgPath:'./src/assets/images/event_03.jpg'
            ,name:''
            ,position:''
        },
        {
             desc: ''
            ,imgPath:'./src/assets/images/event_04.jpg'
            ,name:''
            ,position:''
        },
        {
             desc: ''
            ,imgPath:'./src/assets/images/event_05.jpg'
            ,name:''
            ,position:''
        },
    ])

    onMounted(() =>{
        new WOW().init()
        $(".product-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin: 25,
            loop: true,
            center: true,
            dots: false,
            nav: true,
            navElement:'div',
            navText : [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ],
        })
    });   
</script>
