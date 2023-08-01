<template>
  <!--Modal: modalRelatedContent-->
<div class="modal fade right" id="telGuideModal" tabindex="-1" role="dialog"
  aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="false">
  <div class="modal-dialog modal-side modal-bottom-right modal-notify modal-info" role="document">
    <!--Content-->
    <div class="modal-content">
      <!--Header-->
      <div class="modal-header">
        <p class="heading">연락처 안내</p>
        <button type="button" class="close" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="white-text">&times;</span>
        </button>
      </div>
      <!--Body-->
      <div class="modal-body">

        <div class="row">
          <div class="col-5" style="text-align: center;">
            <img src="@/assets/images/poplogo.png" class="img-fluid" alt="">
          </div>

          <div class="col-7">
            <p style="margin-top: 10px;"><strong>한성응급환자이송단</strong></p>
            <p>전화상담: 1588-123456</p>
            <p>문자상담: 010-1245-1234</p>
            <!--<button type="button" class="btn btn-info btn-md">Read more</button> -->

          </div>
        </div>
      </div>
    </div>
    <!--/.Content-->
  </div>
</div>
<!--Modal: modalRelatedContent-->
</template>
<script setup>

</script>

<style>
.modal-dialog.modal-notify.modal-info .modal-header {
    background-color: #33b5e5;
}
.modal-dialog .modal-content {
    border: 0;
    border-radius: 0.125rem;
    -webkit-box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
    box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
}
.modal-content {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 0.3rem;
    outline: 0;
}
.modal-dialog.modal-notify .modal-header {
    border: 0;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
}
.modal-dialog .modal-content .modal-header {
    border-top-left-radius: 0.125rem;
    border-top-right-radius: 0.125rem;
}
.modal-dialog.modal-notify .heading {
    padding: 0.3rem;
    margin: 0;
    font-size: 1.15rem;
    color: #fff;
}
.modal-dialog.modal-notify .close {
    opacity: 1;
}
.modal-header .close {
    padding: 1rem 1rem;
    margin: -1rem -1rem -1rem auto;
}
.close {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
}
button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
}
.modal.btn-info {
    color: #fff !important;
    background-color: #33b5e5 !important;
}
.modal.btn {
    margin: 0.375rem;
    color: inherit;
    text-transform: uppercase;
    word-wrap: break-word;
    white-space: normal;
    cursor: pointer;
    border: 0;
    border-radius: 0.125rem;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    padding: 0.84rem 2.14rem;
    font-size: .81rem;
}
.btn.btn-md {
    padding: 0.7rem 1.6rem;
    font-size: .7rem;
}
.modal-content p{
  color: #616161;
  font-family: 'NotoSansKRLight' !important;
}

</style>