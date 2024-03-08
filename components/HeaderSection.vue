
<template>
  <div class="bg-primary py-4 font container-space">
    <!-- Header -->
<!--    <div>-->
<!--      <TopBar></TopBar>-->
<!--    </div>-->

    <!-- Section 1 -->
    <v-row class="mt-16 font-c-primary" :class="$vuetify.display.xs?'ma-5':''">
      <v-col sm="12" md="6" cols="12">
        <div class="heading-2 mt-4 ">
          <div>"Oplev Enestående Smagsoplevelser i Hjertet af Nyborg på Apoli!"</div>
<!--          <div>is important</div>-->
<!--          <div>part of lifestyle</div>-->
        </div>
<!--        <div class="mt-6">-->

<!--        </div>-->
      </v-col>
      <v-col class="d-none d-md-block d-lg-block" sm="12" md="6" cols="12" >
        <v-img class="position: relative" style="height: 931px" src="/assets/header-img1.png" />
<!--        <div class="header-image-position">-->
<!--          <v-img src="/assets/Images.png" />-->
<!--        </div>-->
      </v-col>
    </v-row>

    <!-- Section 2 -->
    <v-row class="mt-14 font-c-primary" :class="$vuetify.display.xs?'ma-5':''">
      <v-col cols="12" sm="12" md="6">
        <v-img src="/assets/Image.png" />
        <div class="heading-2 mt-8">
          <div>"Begynd Dit Kulinariske Eventyr I Dag!"</div>
          <div>din kost i dag</div>
        </div>
<!--        <div class="mt-8">-->

<!--        </div>-->
      </v-col>
      <v-col class="d-flex justify-center" cols="12" sm="12" md="6">
        <div>
          <div style="max-width: 400px">
            Forkæl dine smagsløg med vores fortryllende smagsoplevelser. Nyd hvert bid af vores kulinariske mesterværker.
          </div>
          <div class="mt-14 mx-auto"> 
            <v-img class="mx-auto" style="max-width: 500px;" :style="$vuetify.display.xs ? 'max-width: 350px;' : ''" src="/assets/Image (1).png" />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>