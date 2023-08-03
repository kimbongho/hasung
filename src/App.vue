<template>
   <router-view/>
</template>

<script setup>

 import {ref, onMounted} from 'vue'
 
 onMounted(() =>{
   Kakao.init('3a085facd5696e3d61e79b8acfb23e75');
 })
</script>

