<script setup></script>

<template>
  <div class="container-space font text-secondary bg-primary ">
    <v-row >
<!--      <v-col sm="12" md="6" cols="12">-->
<!--        <v-img :height="$vuetify.display.xs?500:800" src="/assets/cook.png" />-->
<!--      </v-col>-->
      <v-col sm="12" md="6" cols="12">
        <div class="heading-2" :class="$vuetify.display.xs || $vuetify.display.sm ? 'text-center' : ''">
          <div>Excellent</div>
          <div>cook</div>
        </div>
        <div class="leaf-image">
          <img class="image-pisition" src="/assets/Leaf.png" alt="" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>