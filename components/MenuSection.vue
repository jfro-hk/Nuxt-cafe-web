<script setup>
defineProps({
  dishes:Object
})
</script>

<template>
  <div class="container-space font text-secondary pb-16">
    <div>
      <img class="menu-image" src="/assets/Image (2).png" />
      <div class="heading-2">Latest Dishes</div>
      <div>
        <div>This is a section of your menu. Give your section</div>
        <div>a brief description</div>
      </div>
      <v-row :style="$vuetify.display.mobile?'':'margin-top: 170px'">
          <v-col cols="12" md="6" sm="6" v-for="(dish, index) in dishes.slice(0, 4)" :key="index" >
            <!--            <div>{{ menuGroup.dish_title }}</div>-->
            <div class="text-right heading-5" style="border-bottom: 2px dotted">
              {{ dish.price }},-
            </div>
            <div class="mt-4">
              <div class="heading-4">
                <div>{{ dish.title }}</div>
              </div>
              <div>{{ dish.description }}</div>
            </div>
          </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss">
</style>
