<template>
  <!--  <div style="background: #0000001a "></div>-->
  <div class="dot"
       :style="size == 's' ? disable? 'background: #0000001a !important;; width: 150px;':'width: 150px;'
       :disable?'width: 200px;background: #0000001a !important;'
       :'width: 200px;'"
       :class="type == 'c'?'border-r-c':''">
    <!--    <span class="total">{{total}}</span>-->
    <span class="number">{{ antal }}</span>
  </div>
</template>
<script>
export default {
  props: {
    disable: Boolean,
    total: Number,
    type: String,
    size: String,
    antal: Number
  }
}
</script>
<style>
.border-r-c {
  border-radius: 50%;
}

.dot {
  height: 200px;
  background-color: #819d7c;
  display: flex; /* Use flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

.total {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #3d5e50;
}

.number {
  color: #d1dacf;
  font-size: 24px; /* Adjust font size as needed */
}
</style>