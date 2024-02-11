<template>
  <TopSection class="mt-16" cls="menu-header" img="/assets/get-in-touch.png"/>
  <div class="container-space font bg-primary text-secondary pt-16 pb-16 text-center">
    <div class="heading-2">Contact Us</div>
    <div class="text-grey-darken-1">Get in touch with restaurant</div>
    <div class="mt-10 " :class="$vuetify.display.xs?'ma-10':''">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field placeholder="Full Name"
                            variant="outlined"
                            required
                            hide-details
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field placeholder="Email"
                            variant="outlined"
                            required
                            hide-details/>
            </v-col>
            <v-col cols="12">
              <v-textarea  variant="outlined"
                           required
                           hide-details>

              </v-textarea>
            </v-col>
          </v-row>
          <div class="mt-8">
            <v-btn class="text-none" color="#0E0F3D" variant="flat">Submit</v-btn>
          </div>
        </v-container>
      </v-form>
    </div>
  </div>
</template>
<script setup>
import TopSection from "@/components/TopSection.vue";
import {ref} from "vue";
import moment from "moment/moment.js";

const form = ref({
  date: new Date(),
  time: "6:00 pm",
  persion: "2 Person",
});

const formatedDate = () => {
  return moment(form.value.date).format('DD/MM/YYYY');
}
</script>

<style lang="scss">
.customClass .vuejs3-datepicker__inputvalue {
  padding-top: 14px;
  padding-bottom: 14px;
  border: 1px solid dimgrey;
  width: 100%;
}
</style>