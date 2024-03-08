<script setup>
import {ref} from 'vue'

const reviews = ref([
  {},
  {},
  {}
])

const selectedReview = ref(0)
</script>

<template>
  <div class="container-space font text-secondary pt-16 pb-16 text-center">
    <div class="text-center">
      <div class="heading-2">
        <div>Kalorier energi</div>
        <div>Balance</div>
      </div>
      <div class="mt-4 text-grey-darken-1">
      </div>
    </div>
    <div class="mt-6">
      <v-row>
        <v-col sm="4" cols="12">
          <v-card flat class="mx-auto" :max-width="$vuetify.display.xs?300:500">
            <v-img cover :height="$vuetify.display.xs?300:500" src="../assets/main.JPG">
              <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                <template v-slot:prepend>
                  <div class="heading-5" style="color: #0e0f3d">Starters</div>
                </template>
                <template v-slot:append>
                  <v-btn
                    block
                    class="text-none"
                    color="#0E0F3D"
                    variant="icon"
                    icon="mdi-arrow-right"
                  />
                </template>
              </v-toolbar>
            </v-img>
          </v-card>
        </v-col>
        <v-col sm="4" cols="12">
          <v-card flat class="mx-auto" :max-width="$vuetify.display.xs?300:500">
            <v-img cover :height="$vuetify.display.xs?300:500" src="/assets/RES.PNG">
              <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                <template v-slot:prepend>
                  <div class="heading-5" style="color: #0e0f3d">Mains</div>
                </template>
                <template v-slot:append>
                  <v-btn
                    block
                    class="text-none"
                    color="#0E0F3D"
                    variant="icon"
                    icon="mdi-arrow-right"
                  />
                </template>
              </v-toolbar>
            </v-img>
          </v-card>
        </v-col>
        <v-col sm="4" cols="12">
          <v-card flat class="mx-auto" max-width="500">
            <v-img cover :height="$vuetify.display.xs?300:500" src="/assets/main.JPG">
              <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                <template v-slot:prepend>
                  <div class="heading-5" style="color: #0e0f3d">Soups</div>
                </template>
                <template v-slot:append>
                  <v-btn
                    block
                    class="text-none"
                    color="#0E0F3D"
                    variant="icon"
                    icon="mdi-arrow-right"
                  />
                </template>
              </v-toolbar>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div>
      <div class="mt-8 d-flex">
        <div class="heading-5 text-secondary text-left">
          Følg os på sociale medier for de seneste opdateringer, særlige tilbud og glimt bag kulisserne af vores køkken. Slut dig til vores fællesskab af madentusiaster og hold forbindelsen, uanset hvor du går.
        </div>
        <div style="margin-left: -80px">
          <img
            :style="$vuetify.display.xs ? 'width: 100px;' : ''"
            src="/assets/”.png"
          />
        </div>
      </div>
<!--      <v-row class="mt-8">-->
<!--        <v-col cols="12" sm="6" class="d-flex">-->
<!--          <div>-->
<!--            <v-avatar size="120">-->
<!--              <v-img src="/assets/Avatar (2).png" />-->
<!--            </v-avatar>-->
<!--          </div>-->
<!--          <div class="text-secondary pl-6 pt-6">-->
<!--            <div class="heading-6">Jhon Doe</div>-->
<!--            <div class="text-left mt-2">Bloger</div>-->
<!--          </div>-->
<!--        </v-col>-->
<!--        <v-col-->
<!--          cols="12"-->
<!--          sm="6"-->
<!--          class="pt-8 d-flex"-->
<!--          :class="$vuetify.display.xs ? 'justify-center' : 'justify-end'"-->
<!--        >-->
<!--          <div>-->
<!--            <v-btn-->
<!--              block-->
<!--              class="text-none"-->
<!--              color="#0E0F3D"-->
<!--              variant="icon"-->
<!--              icon="mdi-arrow-left"-->
<!--              :disabled="selectedReview===0"-->
<!--              @click="selectedReview= selectedReview-1"-->
<!--            />-->
<!--          </div>-->
<!--          <div class="heading-6 pt-1 px-2">{{ selectedReview+1 }}/{{ reviews.length }}</div>-->
<!--          <div>-->
<!--            <v-btn-->
<!--              block-->
<!--              class="text-none"-->
<!--              color="#0E0F3D"-->
<!--              variant="icon"-->
<!--              icon="mdi-arrow-right"-->
<!--              :disabled="selectedReview=== reviews.length-1"-->
<!--              @click="selectedReview= selectedReview+1"-->
<!--            />-->
<!--          </div>-->
<!--        </v-col>-->
<!--      </v-row>-->
    </div>
  </div>
</template>

<style lang="scss"></style>
