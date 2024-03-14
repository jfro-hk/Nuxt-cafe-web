<script setup>
defineProps({
  img: String,
  cls: String,
  title: String,
  sub: {
    type: String,
  },
});
</script>

<template>
  <div
    :style="`background: linear-gradient(0deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0.46) 100%), url(${img}), lightgray 0px -103.59px / 115.156% 136.498% no-repeat;    background-size: cover;`"
    :class="cls"
    class="bg-secondary py-4 font text-primary container-space mb-5"
  >
    <div class="mt-16">
      <div class="d-flex flex-column ga-2 align-start mt-5 ml-4">
        <div class="heading fcw mt-13">
          {{ title }}
          <!--          View Our <br>-->
          <!--          New Menu-->
        </div>
        <span class="fcw">{{ sub }}</span>
      </div>
    </div>

    <!-- Section 2 -->
  </div>
</template>

<style lang="scss"></style>
