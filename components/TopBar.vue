<script setup>
defineProps({
  img:{
    type:String,
    default:'bg-secondary'
  }
})
</script>
<template>

<!--  <v-card>-->
<!--{{img}}-->
<!--  </v-card>-->
<!--  <div class="topBar">-->
  <div v-if="$vuetify.display.xs" class="d-flex justify-space-between topBar pa-7" :class="img">
    <div>
      <v-avatar color="primary" size="50">
        <img src="/assets/Café.png" alt="logo" width="30px" />
      </v-avatar>
      <v-btn color="primary" @click.stop="$emit('sidebar')" class="ml-1" icon="$menu" variant="text" />
    </div>
    <div class="text-center">
      <div class="text-primary d-none" :class="$vuetify.display.xs ? 'text-caption' : ''">+86 852 346 000</div>
      <v-btn class="mt-1" color="#FFE8D0" variant="outlined" :class="$vuetify.display.xs ? 'text-caption' : ''">Reservations</v-btn>
    </div>
  </div>
  <div v-else class="d-flex justify-space-between" :class="img">
    <div class="d-flex mt-10 justify-space-between w-100 mb-10">
    <div class="ml-11 ">
      <v-avatar color="primary" size="50">
        <img src="/assets/Café.png" alt="logo" width="30px" />
      </v-avatar>
      <v-btn color="primary" @click.stop="$emit('sidebar')" class="ml-1" icon="$menu" variant="text" />
    </div>
    <div class="mt-2 mr-11">
      <span class="text-primary">+86 852 346 000</span>
      <v-btn class="ml-4 text-none" color="primary" variant="outlined">Reservations</v-btn>
    </div>
    </div>
  </div>
<!--  </div>-->
</template>