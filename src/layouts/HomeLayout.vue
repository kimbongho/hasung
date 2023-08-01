<template>
    <Header/>
    <!-- Carousel Start -->
    <div class="container-fluid px-0 mb-5">
        <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="@/assets/images/main1.jpg" alt="Image">
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-7 text-center">
                                    <p class="fs-4 text-white animated zoomIn"><strong>한성응급환자이송단은</strong></p>
                                    <h1 class="text-dark mb-4 animated zoomIn">신속, 정확, 안전하게 그리고 체계적인<br/> 서비스를 제공합니다.</h1>
                                    <!--<a href="" class="btn btn-light rounded-pill py-3 px-5 animated zoomIn">Explore More</a>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="@/assets/images/main2.jpg" alt="Image">
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-7 text-center">
                                    <p class="fs-4 text-white animated zoomIn"><strong>저희 응급환자 이송센터는<br/>112, 119 구조 · 구급 · 재난 · 재해 시</strong></p>
                                    <h1 class="text-dark mb-4 animated zoomIn">먼저 차량지원과 의료지원을 원칙으로 하며<br/> 응급환자이송업무를 최선으로 하는 업체입니다. </h1>
                                    <!--<a href="" class="btn btn-light rounded-pill py-3 px-5 animated zoomIn">Explore More</a>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <!-- Carousel End -->

     <!-- About Start -->
     <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6">
                    <div class="row g-3">
                        <div class="col-6 text-end">
                            <img class="img-fluid bg-white w-100 mb-3 wow fadeIn"  data-wow-delay="0.1s" src="@/assets/images/about-1.jpg" alt="">
                            <img class="img-fluid bg-white w-50 wow fadeIn" data-wow-delay="0.2s" src="@/assets/images/about-3.jpg" alt="">
                        </div>
                        <div class="col-6">
                            <img class="img-fluid bg-white w-50 mb-3 wow fadeIn" data-wow-delay="0.3s" src="@/assets/images/about-4.jpg" alt="">
                            <img class="img-fluid bg-white w-100 wow fadeIn" data-wow-delay="0.4s" src="@/assets/images/about-2.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div class="section-title">
                        <p class="fs-5 fw-medium fst-italic text-primary">회사소개</p>
                        <h1 class="display-6">한성은 노력과 시행착오를 통해 <br/>고객과 더불어 성장하였습니다. </h1>
                    </div>
                    <div class="row g-3 mb-4">
                        <div class="col-sm-4">
                            <img class="img-fluid bg-white w-100" src="@/assets/images/about-5.jpg" alt="">
                        </div>
                        <div class="col-sm-8">
                            <h5>환자를 내 가족처럼</h5>
                            <p class="mb-0">
                                한성은 앞서가는 응급의료서비스에 선두를 달리고 있는 대표적인 회사입니다.<br/>
                                관련업계의 경쟁이 점점 격화되고있는 상황에서도<br/> 환자와 가족을 먼저 생각하는 기업으로 <br/>이목을 집중시켰습니다.
                            </p>
                        </div>
                    </div>
                    <div class="border-top mb-4"></div>
                    <div class="row g-3">
                        <div class="col-sm-8">
                            <h5>앞으로 한성은 더 나아가... </h5>
                            <p class="mb-0">21세기에 적합한 응급서비스로 환자와 가족 여러분의 성원에 보답하도록 하겠습니다.</p>
                        </div>
                        <div class="col-sm-4">
                            <img class="img-fluid bg-white w-100" src="@/assets/images/about-6.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->

    <!-- Testimonial Start -->
    <div class="container-fluid testimonial py-5 my-5">
        <div class="container py-5">
            <div class="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <p class="fs-3 fw-medium fst-italic text-white">직원소개</p>
                <h1 class="display-6">구급대원 및 응급구조사 소개</h1>
            </div>
            <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.5s">
                <div class="testimonial-item p-4 p-lg-5">
                    <p class="mb-4">운전경력10년 구급차 운전 및 응급구조사 2급 보유 신속, 정확, 안전하게 모시겠습니다.</p>
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="img-fluid flex-shrink-0" src="@/assets/images/testimonial-1.jpg" alt="">
                        <div class="text-start ms-3">
                            <h5>김지환</h5>
                            <span class="text-primary">본부장</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-item p-4 p-lg-5">
                    <p class="mb-4">경력5년 응급구조사, 언제나 환자만을 생각하면 최선을 다하겠습니다.</p>
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="img-fluid flex-shrink-0" src="@/assets/images/testimonial-2.jpg" alt="">
                        <div class="text-start ms-3">
                            <h5>김소연</h5>
                            <span class="text-primary">과장</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-item p-4 p-lg-5">
                    <p class="mb-4">운전경력15년 환자의 안전과 생명을 최우선으로 생각하고, 친절히 모시겠습니다.</p>
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="img-fluid flex-shrink-0" src="@/assets/images/testimonial-3.jpg" alt="">
                        <div class="text-start ms-3">
                            <h5>김동수</h5>
                            <span class="text-primary">대표이사</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <CmmContract/>
    <Footer/>
</template>

<script setup>

    import {ref, onMounted} from 'vue'
    import WOW from 'wow.js'
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import CmmContract from '@/components/CmmContract.vue'

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
            responsive: {
                0:{
                    items:1
                },
                576:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                }
            }
        });
         // Testimonial carousel
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            items: 1,
            loop: true,
            dots: true,
            nav: false,
        });

    })

</script>

<style>
    @import '@/assets/css/style.css';
</style>
