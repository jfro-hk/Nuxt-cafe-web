
<template>
  <div class="bg-secondary py-4 font container-space">
    <!-- Header -->
<!--    <div>-->
<!--      <TopBar></TopBar>-->
<!--    </div>-->

    <!-- Section 1 -->
    <v-row class="mt-16 font-c-primary" :class="$vuetify.display.xs?'ma-5':''">
      <v-col sm="12" md="6" cols="12">
        <div class="heading mt-4">
          <div>Healthy Eating</div>
          <div>is important</div>
          <div>part of lifestyle</div>
        </div>
        <div class="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
        </div>
        <div>
          <v-img
            style="width: 40px; height: 562px"
            src="/assets/Header_Scroll_Default.png"
          />
        </div>
      </v-col>
      <v-col class="d-none d-md-block d-lg-block" sm="12" md="6" cols="12" >
        <v-img class="position: relative" style="height: 931px" src="/assets/header-img1.png" />
        <div class="header-image-position">
          <v-img src="/assets/Images.png" />
        </div>
      </v-col>
    </v-row>

    <!-- Section 2 -->
    <v-row class="mt-14 font-c-primary" :class="$vuetify.display.xs?'ma-5':''">
      <v-col cols="12" sm="12" md="6">
        <v-img src="/assets/Image.png" />
        <div class="heading-2 mt-8">
          <div>Start to plan</div>
          <div>your diet today</div>
        </div>
        <div class="mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
        </div>
      </v-col>
      <v-col class="d-flex justify-center" cols="12" sm="12" md="6">
        <div>
          <div style="max-width: 400px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
          </div>
          <div class="mt-14 mx-auto"> 
            <v-img class="mx-auto" style="max-width: 500px;" :style="$vuetify.display.xs ? 'max-width: 350px;' : ''" src="/assets/Image (1).png" />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>