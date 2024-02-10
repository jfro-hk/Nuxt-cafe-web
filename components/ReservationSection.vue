<script setup>
import { ref } from "vue";
import moment from 'moment'

const form = ref({
  date: new Date(),
  time: "6:00 pm",
  persion: "2 Person",
});

const formatedDate = () => {
  return moment(form.value.date).format('DD/MM/YYYY');
}
</script>

<template>
  <div class="container-space font bg-primary text-secondary pt-16 pb-16 text-center">
    <div class="heading-2">Make a Reservation</div>
    <div class="text-grey-darken-1">Get in touch with restaurant</div>
    <div class="mt-10 " :class="$vuetify.display.xs?'ma-10':''">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-text-field
                    readonly
                    v-bind="props"
                    :model-value="formatedDate()"
                    variant="outlined"
                    required
                    hide-details
                  ></v-text-field>
                </template>
                <v-date-picker v-model="form.date" :max-width="$vuetify.display.width < 300 ? 250 : 380"></v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                dense
                v-model="form.time"
                :items="['6:00 pm']"
                variant="outlined"
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                v-model="form.persion"
                :items="['2 Peron']"
                variant="outlined"
              ></v-select>
            </v-col>
          </v-row>
          <div class="mt-8">
            <v-btn class="text-none" color="#0E0F3D" variant="flat"> Book Now </v-btn>
          </div>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<style lang="scss">
.customClass .vuejs3-datepicker__inputvalue {
  padding-top: 14px;
  padding-bottom: 14px;
  border: 1px solid dimgrey;
  width: 100%;
}
</style>
