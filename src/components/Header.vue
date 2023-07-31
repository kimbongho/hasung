<template>
     <!-- Spinner Start -->
     <div id="spinner" ref="spinner" :class="spinnerClass">
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;"></div>
    </div>
    <!-- Spinner End -->

    
    <!-- Navbar Start -->
    <div :class="stickyTopClass + ' container-fluid bg-white sticky-top'" :style="stickyTopStyle">
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
                <RouterLink class="navbar-brand" to="/home">
                  <img class="img-fluid" src="@/assets/images/logo.png" alt="Logo">
                </RouterLink>
                <button type="button" class="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto">
                        <RouterLink class="nav-item nav-link" to="/about">회사소개</RouterLink>
                        <RouterLink class="nav-item nav-link" to="/service">서비스소개</RouterLink>
                        <RouterLink class="nav-item nav-link" to="/emergency">응급이송후기</RouterLink> 
                        <RouterLink class="nav-item nav-link" to="/paytable">구급차요금표</RouterLink>
                        <RouterLink class="nav-item nav-link" to="/hospital">병원안내</RouterLink>
                        <RouterLink class="nav-item nav-link" to="/contract">오시는길</RouterLink>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <!-- Navbar End -->
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    const spinnerClass = ref('show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center')
   
    const stickyTopClass = ref('')
    const stickyTopStyle  = ref('')

    // 탑 메뉴 스롤롤 이벤트 핸들러
    const scrollNav = (event) => {
        if(window.top.scrollY > 300){
            stickyTopClass.value = 'shadow-sm'
            stickyTopStyle.value = 'top:0px'
        } else {
            stickyTopClass.value = ''
            stickyTopStyle.value = 'top:-150px'
        }
    }

    onMounted(() =>{
      
        // 스크롤 이벤트 바인드
        window.addEventListener('scroll', scrollNav)
        
        // 로딩바 체크
        setTimeout(() => {
            spinnerClass.value = spinnerClass.value.replace('show', '')
        }, 1);
     })


</script>
