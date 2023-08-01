<template>
   <Header/>
    <!-- Page Header Start -->
    <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container text-center py-5">
            <h1 class="display-2 text-dark mb-4 animated slideInDown">{{ $route.name }}</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="#">{{ $route.meta.depth1 }}</a></li>
                    <li class="breadcrumb-item text-dark" aria-current="page">{{ $route.meta.depth2 }}</li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- Page Header End -->
    <router-view/>
    <Footer/>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import WOW from 'wow.js'
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'

</script>
