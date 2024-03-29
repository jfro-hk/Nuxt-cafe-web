<script setup>
import { ref } from "vue";
import { useApi } from "../api.js";
import moment from "moment";

const valid = false;
const form = ref({
  fullname: null,
  date: new Date(),
  time: null,
  antal: null,
  description: null,
});
const rules = {
  fullname: [(v) => !!v || "Navn er påkrævet"],
  time: [(v) => !!v || "Tid er påkrævet"],
  antal: [(v) => !!v || "Antal er påkrævet"],
  description: [(v) => !!v || "Beskrivelse er påkrævet"],
};

const allowedDates = computed(() => {
  return (date) => {
    // Check if the date is not a Monday
    const isMonday = date.getDay() === 1;

    // Check if the date is not in the past
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set the time to midnight
    const isPast = date.getTime() < currentDate.getTime();

    // Return true only if it's not a Monday and not in the past
    return !isMonday && !isPast;
  };
});

const api = useApi();
let message = ref();
let loading = ref(false);
let spinner = ref(false);
function postData() {
  spinner.value = true;
  loading.value = false;
  if (form.value.fullname != null && form.value.time && form.value.antal) {
  setTimeout(function () {
      api
        .post(
          "/make-res/$2a$12$cAZSHYq3zV0CbnaolVBMJeTRTPpBTKbiQSFMRKkU2WrAHQD4KiSeK",
          form.value
        )
        .then(function (response) {
          console.log(response.data); // Logging response data
          spinner.value = false;
          loading.value = true;
          message.value = response.data;
        })
        .catch(function (error) {
          console.error("Error:", error);
          spinner.value = false;
          loading.value = true;
          message.value = "An error occurred while making the reservation.";
        });

  }, 1000);
  }else {
    spinner.value = false;
    loading.value = false;
  }
}

const formatedDate = () => {
  return moment(form.value.date).format("DD/MM/YYYY");
};
function closeAlert() {
  loading.value = false;
  form.value.fullname = null;
  form.value.time = null;
  form.value.antal = null;
  form.value.description = null;
}
function generateTimeSlots() {
  const today = moment();
  const isToday = moment(form.value.date).isSame(today, "day");

  const startTime = moment().set({ hour: 9, minute: 30, second: 0 }); // Set start time to 11:30 AM
  const endTime = moment().set({ hour: 22, minute: 0, second: 0 }); // Set end time to 10:00 PM

  const timeSlots = [];
  let currentTime = moment(startTime);

  // Skip past times if the date is today
  if (isToday) {
    while (currentTime < moment()) {
      currentTime.add(30, "minutes");
    }
  }

  // Generate time slots starting from the current time or from the beginning of the day
  while (currentTime <= endTime) {
    // Format the time as HH:mm
    const formattedTime = currentTime.format("HH:mm");

    // Add the formatted time to the time slots array
    timeSlots.push(formattedTime);

    // Increment the current time by 30 minutes
    currentTime.add(30, "minutes");
  }

  return timeSlots;
}

// Example usage:
const timeSlots = generateTimeSlots();
console.log(timeSlots);
</script>

<template>
  <div
    class="container-space font font-c-secondary pt-16 pb-16 text-center bg-primary"
  >
    <div class="heading-2">Foretag en reservation</div>
    <div class="text-grey-darken-1">
      📞 Klar til at begive sig ud på et kulinarisk eventyr? Foretag din
      reservation i dag, og slutt dig til os på Apoli for en madoplevelse, der
      er uden sidestykke. Vi kan ikke vente med at byde dig velkommen og gøre
      dit besøg virkelig uforglemmeligt!
    </div>
    <div class="mt-10" :class="$vuetify.display.xs ? 'ma-10' : ''">
      <v-form
        validate-on="submit lazy"
        @submit.prevent="postData"
        v-model="valid"
      >
        <v-container>
          <v-row>
            <div class="position-absolute" v-if="spinner" style="left: calc(100% - 53%);margin-top: 50px;">

            <v-progress-circular
              :size="70"
              :width="7"

              color="#51664e"
              indeterminate
            ></v-progress-circular>
            </div>

            <v-col cols="12" v-if="loading">
              <div class="alert" :class="message === 204 ? 'err' : ' succ'">
                <span
                  @click="closeAlert()"
                  class="closebtn"
                  onclick="this.parentElement.style.display='none';"
                  >&times;</span
                >

                <strong>{{ message === 204 ? "Failed" : "Success" }}</strong>
                {{
                  message === 204
                    ? "Restauranten er fuld"
                    : "Reservationen blev gennemført med succes"
                }}
              </div>
            </v-col>
            <template v-if="!loading">
              <v-col cols="12" md="6">
                <v-text-field
                  :rules="rules.fullname"
                  v-model="form.fullname"
                  placeholder="fulde navn"
                  variant="outlined"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-select
                  placeholder="Valgte tid"
                  dense
                  :rules="rules.time"
                  v-model="form.time"
                  :items="timeSlots"
                  item-title="text"
                  item-value="value"
                  variant="outlined"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-menu ref="menu" :close-on-content-click="true">
                  <template v-slot:activator="{ props }">
                    <v-text-field
                      placeholder="Dato"
                      readonly
                      v-bind="props"
                      :model-value="formatedDate()"
                      variant="outlined"
                      required
                    ></v-text-field>
                  </template>

                  <v-date-picker
                    v-model="form.date"
                    :max-width="$vuetify.display.width < 300 ? 250 : 380"
                    color="#819d7c"
                    :allowed-dates="allowedDates"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  :rules="rules.antal"
                  placeholder="Samlet antal personer"
                  v-model="form.antal"
                  :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']"
                  variant="outlined"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  placeholder="Tilføj en note"
                  variant="outlined"
                  v-model="form.description"
                ></v-textarea>
              </v-col>
            </template>
          </v-row>
          <div class="mt-8">
            <!--            <reservation-btn/>-->
            <v-btn
              v-if="!loading"
              :disabled="spinner"
              type="submit"
              class="text-none"
              color="#819d7c"
              variant="flat"
            >
              Book Nu</v-btn
            >
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
.alert {
  padding: 20px;

  color: white;
}
.succ {
  background-color: #18ad1b !important;
}
.err {
  background-color: #f44336 !important;
}
.closebtn {
  margin-left: 15px;
  color: #819d7c;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: #819d7c;
}
</style>
