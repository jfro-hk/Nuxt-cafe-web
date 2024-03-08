<script setup>
defineProps({
  img:{
    type:String,
    default:'bg-secondary'
  },
  pages:Object
})
</script>
<template>

<!--  <v-card>-->
<!--{{img}}-->
<!--  </v-card>-->
<!--  <div class="topBar">-->

  <div v-if="$vuetify.display.xs || $vuetify.display.sm" class="d-flex justify-space-between topBar pa-7" :class="img">
    <div>

<!--      <v-avatar color="primary" size="50">-->
        <span class="heading-5 font-c-primary fs-cursive">Apoli</span>
        <!--        <img src="/assets/Café.png" alt="logo" width="30px" />-->
<!--      </v-avatar>-->
      <v-btn color="#fff" @click.stop="$emit('sidebar')" class="ml-1" icon="$menu" variant="text">
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 94 71" fill="none">
          <line x1="24" y1="21" x2="70" y2="21" stroke="#fff" stroke-width="2"/>
          <line x1="24" y1="35" x2="70" y2="35" stroke="#fff" stroke-width="2"/>
          <line x1="24" y1="49" x2="70" y2="49" stroke="#fff" stroke-width="2"/>
        </svg>
      </v-btn>
    </div>
    <div class="text-center">
      <div class="text-primary d-none" :class="$vuetify.display.xs || $vuetify.display.sm ? 'text-caption' : ''"><span><a href="tel:00 45 00 00 00 00" class="text-decoration-none mr-2 text-blue-grey-lighten-1">00 45 00 00 00 00</a></span></div>
      <v-btn style="border-radius: unset;" class="mt-1" color="#fff" variant="outlined" :class="$vuetify.display.xs || $vuetify.display.sm ? 'text-caption' : ''" @click="$router.push('/#reservation')">Reservationer</v-btn>
    </div>
  </div>
  <div v-else class="d-flex justify-space-between font-c-primary" :class="img">
    <div class="d-flex mt-10 justify-space-between align-center w-100 mb-10">
    <div class="ml-11 ">
<!--      <v-avatar  size="80">-->
      <span class="heading-5 fs-cursive">Apoli</span>
<!--        <img src="https://i.postimg.cc/x1sDVkrG/ca-logo.png" alt="logo" width="100px" />-->
<!--      </v-avatar>-->
      <v-btn v-if="$vuetify.display.xs || $vuetify.display.sm" color="primary" @click.stop="$emit('sidebar')" class="ml-1" variant="text" >
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 94 71" fill="none">
          <line x1="24" y1="21" x2="70" y2="21" stroke="#fff" stroke-width="2"/>
          <line x1="24" y1="35" x2="70" y2="35" stroke="#fff" stroke-width="2"/>
          <line x1="24" y1="49" x2="70" y2="49" stroke="#fff" stroke-width="2"/>
        </svg>
      </v-btn>
    </div>
     <div class="d-flex align-center ga-8 cursor-pointer mt-2 ml-16" v-if="!$vuetify.display.xs && !$vuetify.display.sm">
      <NuxtLink v-for="page in pages" :key="page" :to="page.route" class="text-decoration-none font-c-primary">{{page.title}}</NuxtLink>
     </div>
    <div class="mt-2 mr-11">
      <span>Ring til os? <a href="tel:00 45 54 55 66 37" class="text-decoration-none mr-2 font-c-primary ">+ 45 00 00 00 00</a></span>
      <v-btn class="ml-4 text-none" size="large" style="border-radius: unset;" color="#fff" variant="outlined" @click="$router.push('/#reservation')">Reservationer</v-btn>
    </div>
    </div>
  </div>
<!--  </div>-->
</template>

