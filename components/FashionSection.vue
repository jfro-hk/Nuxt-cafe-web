<script setup>
import config from "../config.js";
defineProps({
  gallery:Object
})
</script>

<template>
  <div class="container-space font text-secondary pt-lg-16 pt-md-16 pb-lg-16 pb-md-16">
    <v-row>
     <v-col cols="12" class="mb-7">
     <div class="d-flex justify-space-between">
       <div class="heading-2">Seneste begivenheder</div>
<!--       <img class="position-absolute" style="right: 0;" width="300" height="300" src="/assets/leaf-oliva.png" />-->
     </div>
     </v-col>
      <v-col cols="12" sm="12" md="6" v-for="(g,index) in gallery.slice(0, 2)" :key="index">
        <v-card flat class="mx-auto" :max-width="$vuetify.display.xs?400:600">
          <v-img cover :height="$vuetify.display.xs?300:500" :src="config.cdn + g.media">
            <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
              <template v-slot:append>
                <v-btn block class="text-none" color="#819d7c" variant="flat">
                  Event
                </v-btn>
              </template>
            </v-toolbar>
          </v-img>
          <v-card-text class="pt-8 px-8">
            <div class="heading-5 text-secondary pb-4" style="border-bottom: 2px dotted">
              <div class="pt-4">{{g.title}}</div>
            </div>
            <div class="text-secondary pt-2" v-html="g.description">
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss"></style>
