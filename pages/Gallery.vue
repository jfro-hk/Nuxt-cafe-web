<template>
  <TopSection
    class="mt-16"
    title="Events"
    cls="menu-header"
    img="./assets/header-img1.png"
  />
  <div class="container-space font text-secondary pt-16 pb-16">
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
        v-for="(g, index) in gallery"
        :key="index"
      >
        <v-card
          flat
          class="mx-auto"
          :max-width="$vuetify.display.xs ? 300 : 600"
        >
          <v-img
            cover
            :height="$vuetify.display.xs ? 300 : 500"
            :src="`${config.cdn}${g.media}`"
          >
            <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark"> </v-toolbar>
          </v-img>
          <v-card-text class="pt-8 px-8">
            <div
              class="heading-5 text-secondary pb-4"
              style="border-bottom: 2px dotted"
            >
              <div>{{ g.title }}</div>
            </div>
            <div class="text-secondary pt-2">
              <div v-html="g.description"></div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import TopSection from "@/components/TopSection.vue";
import config from "../config.js";
defineProps({
  gallery: Object,
});
</script>
