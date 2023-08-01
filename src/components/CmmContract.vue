<template>
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
                    <div class="col-md-4 text-center wow fadeInUp" data-wow-delay="0.3s" @click="btnIconClick('message')">
                        <div class="btn-square mx-auto mb-3" >
                            <i class="fa fa-envelope fa-2x text-white" ></i>
                        </div>
                        <p class="mb-2" data-bs-toggle="modal" data-bs-target="#telGuideModal">문자상담</p>
                    </div>
                    <div class="col-md-4 text-center wow fadeInUp" data-wow-delay="0.4s" @click="btnIconClick('phone')">
                        <div class="btn-square mx-auto mb-3">
                            <i class="fa fa-phone fa-2x text-white"></i>
                        </div>
                        <p class="mb-2" data-bs-toggle="modal" data-bs-target="#telGuideModal">전화상담</p>
                    </div>
                    <div class="col-md-4 text-center wow fadeInUp" data-wow-delay="0.5s" @click="btnIconClick('road')">
                        <div class="btn-square mx-auto mb-3">
                            <i class="fa fa-map-marker-alt fa-2x text-white"></i>
                        </div>
                        <p class="mb-2" data-bs-toggle="modal" data-bs-target="#telGuideModal">오시는길</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <!-- Contact Start -->
  <TelGuide></TelGuide>
</template>
<script setup>
  import {ref, onMounted} from 'vue'
  import TelGuide from '@/components/TelGuide.vue'

  const phoneCall = () => {
      location.href = 'tel:01072371806'
  }

  const phoneSms = () => {
      location.href = 'sms:01072371806'
  }
  const isMobile = () => {
      if( screen.width <= 768 ) {
          return true;
      } else {
          return false;
      }
  }
  const popCall = (event) => {
      console.log(event)
  }

  const btnIconClick = (type) => {
      if(isMobile()){
          if(type === 'message'){
              phoneSms();
          } else if (type === 'phone'){
              phoneCall();
          }
      }else{
          $('#telGuideModal').modal('show');
      }
      
  }

  onMounted(() =>{
    $('#telGuideModal').on('shown.bs.modal', function (e) {})
    $('#telGuideModal').on('hide.bs.modal', function (e) {})
  })
</script>

