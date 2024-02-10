<script setup>
import { ref } from "vue";

const email = ref("");
</script>

<template>
  <div class="bg-secondary font text-primary pt-16 pb-8">
    <div
      class="container-space"
      :class="$vuetify.display.sm || $vuetify.display.xs ? 'text-center' : ''"
    >
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <div class="heading-3">
            <div>Café</div>
            <div>Apostrof</div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <div>
            <div class="heading-6">Contact</div>
            <div class="mt-8 text-body">
              <div>+1+86 852 346 000</div>
              <div>info@foodzero.com</div>
            </div>
            <div class="mt-8 text-body">
              <div>1959 Sepulveda Blvd.</div>
              <div>Culver City, CA, 90230</div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <div>
            <div class="heading-6">Never Miss a Recipeontact</div>
            <div class="mt-8 d-flex">
              <v-text-field
                v-model="email"
                variant="outlined"
                label="Email Address"
                required
                hide-details
              ></v-text-field>
              <div class="pl-2">
                <v-btn block class="text-none py-7" color="primary" variant="flat">
                  Subscribe
                </v-btn>
              </div>
            </div>
            <div class="text-caption pt-2">
              Join our subscribers and get best recipe delivered each week!
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="mt-8" style="border-bottom: 2px dotted white" />
    <!-- <div class="container-space mt-8 d-flex justify-space-between"> -->
    <div class="container-space ">
      <v-row class="mt-8">
        <v-col class="text-caption">© 2020 Café Apostrof Inc. All rights Reserved</v-col>
        <v-col class="d-flex">
          <div>
            <v-btn
              block
              class="text-none"
              color="primary"
              variant="icon"
              icon="mdi-instagram"
            />
          </div>
          <div>
            <v-btn
              block
              class="text-none"
              color="primary"
              variant="icon"
              icon="mdi-twitter"
            />
          </div>
          <div>
            <v-btn
              block
              class="text-none"
              color="primary"
              variant="icon"
              icon="mdi-facebook"
            />
          </div>
          <div>
            <v-btn
              block
              class="text-none"
              color="primary"
              variant="icon"
              icon="mdi-youtube"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
