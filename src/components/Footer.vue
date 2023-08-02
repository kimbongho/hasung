<template>
  <!-- Footer Start -->
  <div class="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
      <div class="container py-5">
          <div class="row g-5">
              <div class="col-lg-3 col-md-6">
                  <h4 class="text-primary mb-4">회사소개</h4>
                  <p>법인명 : (주)한성응급환자이송단</p>
                  <p>대표자명 : 김동수</p>
                  <p>사업자등록번호 : 457-87-01642</p>
              </div>
              <div class="col-lg-3 col-md-6">
                  <h4 class="text-primary mb-4">Quick Links</h4>
                  <a class="btn btn-link" @click="$router.push('/about')">회사소개</a>
                  <a class="btn btn-link" @click="$router.push('/service')">행사소개</a>
                  <a class="btn btn-link" @click="$router.push('/emergency')">응급이송후기</a>
                  <a class="btn btn-link" @click="$router.push('/paytable')">구급차요금표</a>
                  <a class="btn btn-link" @click="$router.push('/hospital')">병원안내</a>
                  <a class="btn btn-link" @click="$router.push('/contract')">오시는길</a>
              </div>
              <div class="col-lg-3 col-md-6">
                  <h4 class="text-primary mb-4">업무시간</h4>
                  <p class="mb-1">월요일 ~ 일요일</p>
                  <h6 class="text-light">24시간 대기</h6>
              </div>
              <div class="col-lg-3 col-md-6">
                  <h4 class="text-primary mb-4">주소 및 연락처</h4>
                  <p class="mb-2"><i class="fa fa-map-marker-alt text-primary me-3"></i>서울특별시 강동구 암사동 123</p>
                  <p class="mb-2"><i class="fa fa-phone-alt text-primary me-3"></i>010-1234-1234</p>
                  <p class="mb-2"><i class="fa fa-envelope text-primary me-3"></i>hansung@naver.com</p>
              </div>
          </div>
      </div>
  </div>
  <!-- Footer End -->

  
  
  <!-- Copyright Start -->
  <div class="container-fluid copyright py-4">
      <div class="container">
          <div class="row">
              <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  <a class="fw-medium" href="#">COPYRIGHT &copy; (주)한성응급환자이송단</a>, All Right Reserved.
              </div>
              <div class="col-md-6 text-center text-md-end">
              </div>
          </div>
      </div>
  </div>
  <!-- Copyright End -->


  <!-- Back to Top -->
  <div id="chat-channel-button" class="btn-kakaoTalk"></div>
  <a href="#" class="btn btn-lg btn-dark btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>

  <div class="fixFooter">
        <div class="d-flex justify-content-center pt-4">
            <a class="btn btn-square btn-blue rounded-circle me-2" @click="btnIconClick('message')"><i class="fa fa-comments" aria-hidden="true"></i></a>
            <a class="btn btn-square btn-blue rounded-circle me-2" @click="btnIconClick('phone')"><i class="fa fa-phone" aria-hidden="true"></i></a>
            <a class="btn btn-square btn-blue rounded-circle me-2" @click="goContract"><i class="fa fa-map-marker" aria-hidden="true"></i></a>
        </div>
  </div>
</template>

<script setup>

  import {ref, onMounted} from 'vue'
  import { useRouter } from 'vue-router';
  
  const router =  useRouter();
  const goContract = () => {
    router.push('/contract')
  }

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
      
  })

 
</script>

<style>
    .fixFooter{
        background: rgba(215 231 249 / 70%);
        position: fixed;
        bottom: 0; 
        left: 0;
        height: 80px;
        width: 100%;
        z-index: 1;
    }
    .btn-blue {
        color: #fff;
        background-color: #007bff;
        border-color:#007bff;
    }

    .btn-kakaoTalk{
        position: fixed;
        right: 30px;
        bottom: 80px;
        z-index: 99;
    }

    
</style>
