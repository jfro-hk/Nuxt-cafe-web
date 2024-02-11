<script setup>
defineProps({
  img: String,
  cls: String,
})
</script>

<template>


  <div
      :style="`background: linear-gradient(0deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0.46) 100%), url(${img}), lightgray 0px -103.59px / 115.156% 136.498% no-repeat;    background-size: cover;`"
      :class="cls" class="bg-secondary py-4 font text-primary container-space mb-5">
    <div class="mt-16">
      <div class="d-flex flex-column ga-2 align-start mt-5 ml-4">
        <div class="heading fcw mt-13">
          Get in Touch
<!--          View Our <br>-->
<!--          New Menu-->
        </div>
        <span class="fcw">The freshest ingredients for you every day</span>
      </div>
      <!--          <v-img-->
      <!--            style="width:100vw"-->
      <!--            :src="img"-->
      <!--          />-->
    </div>
    <!--        <v-img class="position: relative" style="height: 931px" src="/src/assets/header-img1.png" />-->
    <!-- Section 2 -->
  </div>
</template>

<style lang="scss">
</style>
