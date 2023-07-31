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
                                    <h1 class="text-dark mb-4 animated zoomIn">신속, 정확, 안정하게 그리고 체계적인<br/> 서비스를 제공합니다.</h1>
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
                                    <p class="fs-4 text-white animated zoomIn"><strong>저희 응급환자 이송센터는 112, 119 구조 · 구급 · 재난 · 재해 시</strong></p>
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
    
    <!-- Products Start -->
    <!--
    <div class="container-fluid product py-5 my-5">
        <div class="container py-5">
            <div class="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <p class="fs-5 fw-medium fst-italic text-primary">Our Products</p>
                <h1 class="display-6">Tea has a complex positive effect on the body</h1>
            </div>
            <div class="owl-carousel product-carousel wow fadeInUp" data-wow-delay="0.5s">
                <a href="" class="d-block product-item rounded">
                    <img src="@/assets/images/product-1.jpg" alt="">
                    <div class="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                        <h4 class="text-primary">Green Tea</h4>
                        <span class="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                    </div>
                </a>
                <a href="" class="d-block product-item rounded">
                    <img src="@/assets/images/product-2.jpg" alt="">
                    <div class="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                        <h4 class="text-primary">Black Tea</h4>
                        <span class="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                    </div>
                </a>
                <a href="" class="d-block product-item rounded">
                    <img src="@/assets/images/product-3.jpg" alt="">
                    <div class="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                        <h4 class="text-primary">Spiced Tea</h4>
                        <span class="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                    </div>
                </a>
                <a href="" class="d-block product-item rounded">
                    <img src="@/assets/images/product-4.jpg" alt="">
                    <div class="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                        <h4 class="text-primary">Organic Tea</h4>
                        <span class="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
    -->
    <!-- Products End -->

    <!-- Article Start -->
    <!--
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <img class="img-fluid" src="@/assets/images/article.jpg" alt="">
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div class="section-title">
                        <p class="fs-5 fw-medium fst-italic text-primary">Featured Acticle</p>
                        <h1 class="display-6">The history of tea leaf in the world</h1>
                    </div>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p class="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna. Tempor erat elitr rebum at clita.</p>
                    <a href="" class="btn btn-primary rounded-pill py-3 px-5">Read More</a>
                </div>
            </div>
        </div>
    </div>
    -->
    <!-- Article End -->

    <!-- Video Start -->
    <!--
    <div class="container-fluid video my-5">
        <div class="container">
            <div class="row g-0">
                <div class="col-lg-6 py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="py-5">
                        <h1 class="display-6 mb-4">Tea is a drink of <span class="text-white">health</span> and <span class="text-white">beauty</span></h1>
                        <h5 class="fw-normal lh-base fst-italic text-white mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</h5>
                        <div class="row g-4 mb-5">
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <span class="text-dark">Great tea assortment</span>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <span class="text-dark">Spices & additives</span>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <span class="text-dark">Unique accessories</span>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <span class="text-dark">Good for health & beauty</span>
                                </div>
                            </div>
                        </div>
                        <a class="btn btn-light rounded-pill py-3 px-5" href="">Explore More</a>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div class="h-100 d-flex align-items-center justify-content-center" style="min-height: 300px;">
                        <button type="button" class="btn-play" data-bs-toggle="modal"
                            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    -->
    <!-- Video End -->

     <!-- Video Modal Start -->
     <!--
     <div class="modal modal-video fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content rounded-0">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel">Youtube Video</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="ratio ratio-16x9">
                        <iframe class="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                            allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    -->
    <!-- Video Modal End -->

    <!-- Store Start -->
    <!--
    <div class="container-xxl py-5">
        <div class="container">
            <div class="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <p class="fs-5 fw-medium fst-italic text-primary">Online Store</p>
                <h1 class="display-6">Want to stay healthy? Choose tea taste</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="store-item position-relative text-center">
                        <img class="img-fluid" src="@/assets/images/store-product-1.jpg" alt="">
                        <div class="p-4">
                            <div class="text-center mb-3">
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                            </div>
                            <h4 class="mb-3">Nature close tea</h4>
                            <p>Aliqu diam amet diam et eos. Clita erat ipsum lorem erat ipsum lorem sit sed</p>
                            <h4 class="text-primary">$19.00</h4>
                        </div>
                        <div class="store-overlay">
                            <a href="" class="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i class="fa fa-arrow-right ms-2"></i></a>
                            <a href="" class="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i class="fa fa-cart-plus ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="store-item position-relative text-center">
                        <img class="img-fluid" src="@/assets/images/store-product-2.jpg" alt="">
                        <div class="p-4">
                            <div class="text-center mb-3">
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                            </div>
                            <h4 class="mb-3">Green tea tulsi</h4>
                            <p>Aliqu diam amet diam et eos. Clita erat ipsum lorem erat ipsum lorem sit sed</p>
                            <h4 class="text-primary">$19.00</h4>
                        </div>
                        <div class="store-overlay">
                            <a href="" class="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i class="fa fa-arrow-right ms-2"></i></a>
                            <a href="" class="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i class="fa fa-cart-plus ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="store-item position-relative text-center">
                        <img class="img-fluid" src="@/assets/images/store-product-3.jpg" alt="">
                        <div class="p-4">
                            <div class="text-center mb-3">
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                            </div>
                            <h4 class="mb-3">Instant tea premix</h4>
                            <p>Aliqu diam amet diam et eos. Clita erat ipsum lorem erat ipsum lorem sit sed</p>
                            <h4 class="text-primary">$19.00</h4>
                        </div>
                        <div class="store-overlay">
                            <a href="" class="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i class="fa fa-arrow-right ms-2"></i></a>
                            <a href="" class="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i class="fa fa-cart-plus ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                    <a href="" class="btn btn-primary rounded-pill py-3 px-5">View More Products</a>
                </div>
            </div>
        </div>
    </div>
    -->
    <!-- Store End -->

    <!-- Testimonial Start -->
    <!--
    <div class="container-fluid testimonial py-5 my-5">
        <div class="container py-5">
            <div class="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <p class="fs-5 fw-medium fst-italic text-white">Testimonial</p>
                <h1 class="display-6">What our clients say about our tea</h1>
            </div>
            <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.5s">
                <div class="testimonial-item p-4 p-lg-5">
                    <p class="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="img-fluid flex-shrink-0" src="@/assets/images/testimonial-1.jpg" alt="">
                        <div class="text-start ms-3">
                            <h5>Client Name</h5>
                            <span class="text-primary">Profession</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-item p-4 p-lg-5">
                    <p class="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="img-fluid flex-shrink-0" src="@/assets/images/testimonial-2.jpg" alt="">
                        <div class="text-start ms-3">
                            <h5>Client Name</h5>
                            <span class="text-primary">Profession</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-item p-4 p-lg-5">
                    <p class="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                    <div class="d-flex align-items-center justify-content-center">
                        <img class="img-fluid flex-shrink-0" src="@/assets/images/testimonial-3.jpg" alt="">
                        <div class="text-start ms-3">
                            <h5>Client Name</h5>
                            <span class="text-primary">Profession</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    -->
    <!-- Testimonial End -->

     <!-- Contact Start -->
     <div class="container-xxl contact py-5">
        <div class="container">
            <div class="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <p class="fs-5 fw-medium fst-italic text-primary">고객문의</p>
                <h1 class="fs-5">응급환자 발생 시 구급차가 필요할땐 연락주십시요.</h1>
            </div>
            <div class="row justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                <div class="col-lg-8">
                    <p class="text-center mb-5">24시간 대기 언제든 구급차가 필요할땐 한성으로 연락주세요.</p>
                    <div class="row g-5">
                        <div class="col-md-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                            <div class="btn-square mx-auto mb-3">
                                <i class="fa fa-envelope fa-2x text-white"></i>
                            </div>
                            <p class="mb-2">91syk@naver.com</p>
                            <p class="mb-0">hansung@naver.com</p>
                        </div>
                        <div class="col-md-4 text-center wow fadeInUp" data-wow-delay="0.4s">
                            <div class="btn-square mx-auto mb-3">
                                <i class="fa fa-phone fa-2x text-white"></i>
                            </div>
                            <p class="mb-2">010-6295-6370</p>
                            <p class="mb-0">1588-6370</p>
                        </div>
                        <div class="col-md-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                            <div class="btn-square mx-auto mb-3">
                                <i class="fa fa-map-marker-alt fa-2x text-white"></i>
                            </div>
                            <p class="mb-2">구천면로 42길</p>
                            <p class="mb-0">서울특별시 암사동</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Contact Start -->
    <Footer/>
</template>

<script setup>

    import {ref, onMounted} from 'vue'
    import WOW from 'wow.js'
    import Header from '@/components/Header.vue'
    import Footer from '@/components/FooterNew.vue'

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

        // Modal Video
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);
        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })
        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })

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
