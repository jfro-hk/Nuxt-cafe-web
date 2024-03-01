<template>
  <TopSection class="mt-16" title="Gallery" cls="menu-header" img="./assets/gallery_2.png"/>
  <div class="container-space font text-secondary pt-16 pb-16">
    <v-row>
      <v-col cols="12" sm="12" md="6" v-for="(g,index) in Object.values(...gallery)" :key="index">
        <v-card flat class="mx-auto" max-width="600">
          <v-img cover height="500" :src="`http://localhost:8000${g.media}`">
            <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
              <template v-slot:append>
                <v-btn block class="text-none" color="#0E0F3D" variant="flat">
                  Fashion
                </v-btn>
              </template>
            </v-toolbar>
          </v-img>
          <v-card-text class="pt-8 px-8">
            <div class="heading-5 text-secondary pb-4" style="border-bottom: 2px dotted">
              <div>{{g.title}}</div>

            </div>
            <div class="text-secondary pt-2">
             <div v-html="g.description"></div>
            </div>
<!--            <div class="pt-4">-->
<!--              <v-btn-->
<!--                  class="text-none text-secondary"-->
<!--                  append-icon="mdi-arrow-right"-->
<!--                  variant="text"-->
<!--              >-->
<!--                Read More-->
<!--              </v-btn>-->
<!--            </div>-->
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>
  </div>
</template>
<script setup>
import TopSection from "@/components/TopSection.vue";
import {useFetch} from "nuxt/app";

definePageMeta({
  layout: 'gallery'
})
const {data: gallery} = await useFetch('http://localhost:8000/api/get-gallery/$2a$12$cAZSHYq3zV0CbnaolVBMJeTRTPpBTKbiQSFMRKkU2WrAHQD4KiSeK')

</script>
