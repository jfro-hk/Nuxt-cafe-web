<script setup>
import {ref, watch} from "vue";
import {useApi} from "../api.js";
import moment from "moment";
import Table from "@/components/tables/table.vue";

defineProps({
  settings: Array
})
const valid = false;
const form = ref({
  fullname: null,
  date: null,
  time: null,
  antal: null,
  description: null,
  table: {
    type: null,
    key: null
  },
});
const rules = computed(() => ({
  fullname: [!!form.value.fullname || "Navn er påkrævet"],
  time: [(v) => !!v || "Tid er påkrævet"],
  antal: [(v) => !!v || "Antal er påkrævet"],
  description: [(v) => !!v || "Beskrivelse er påkrævet"],
}));

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
let callUs = ref(false)
watch(form.value, (newVal) => {
  if (newVal.antal >= 5) {
    callUs.value = true
  }
});
const api = useApi();
let message = ref();
let loading = ref(false);
let spinner = ref(false);
let step = ref(1);
const tables = ref(null)

function getTables(date, time) {
  api.get(`/get-tables/${moment(date).format('YYYY-MM-DD')}/${time}/$2a$12$cAZSHYq3zV0CbnaolVBMJeTRTPpBTKbiQSFMRKkU2WrAHQD4KiSeK`)
      .then(function (response) {
        console.log(response.data);
        tables.value = response.data;
      })
}

function postData() {
  spinner.value = true;
  loading.value = false;
  if (form.value.fullname != null
      && form.value.time
      && form.value.antal
      && form.value.table) {
    setTimeout(function () {
      api
          .post(
              "/make-res/$2a$12$cAZSHYq3zV0CbnaolVBMJeTRTPpBTKbiQSFMRKkU2WrAHQD4KiSeK",
              form.value
          )
          .then(function (response) {
            spinner.value = false;
            loading.value = true;
            step.value = 1
            message.value = response.data;
          })
          .catch(function (error) {
            console.error("Error:", error);
            spinner.value = false;
            loading.value = true;
            message.value = "An error occurred while making the reservation.";
          });

    }, 1000);
  } else {
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
  form.value.table.type = null;
  form.value.table.key = null;
}

function generateTimeSlots() {
  const today = moment();
  const isToday = moment(form.value.date).isSame(today, "day");

  const startTime = moment().set({hour: 9, minute: 30, second: 0}); // Set start time to 11:30 AM
  const endTime = moment().set({hour: 22, minute: 0, second: 0}); // Set end time to 10:00 PM

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
  <v-dialog class="callus-dialog" v-model="callUs">
    <v-row justify="center">
      <v-card elevation="0" width="500" height="300" class="callUs-card bg-primary">
        <v-btn style="position: absolute;right: 15px;top: 15px;" icon elevation="0" size="small"
               @click="callUs = false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M18.711 5.29289C19.1015 5.68342 19.1015 6.31658 18.711 6.70711L6.71101 18.7071C6.32049 19.0976 5.68732 19.0976 5.2968 18.7071C4.90628 18.3166 4.90628 17.6834 5.2968 17.2929L17.2968 5.29289C17.6873 4.90237 18.3205 4.90237 18.711 5.29289Z"
                  fill="#8C8B91"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5.2968 5.29289C5.68732 4.90237 6.32049 4.90237 6.71101 5.29289L18.711 17.2929C19.1015 17.6834 19.1015 18.3166 18.711 18.7071C18.3205 19.0976 17.6873 19.0976 17.2968 18.7071L5.2968 6.70711C4.90628 6.31658 4.90628 5.68342 5.2968 5.29289Z"
                  fill="#8C8B91"/>
          </svg>
        </v-btn>
        <v-row align="center" justify="center" class="fill-height"> <!-- Added align and justify center -->
          <v-col>
            <div class="d-flex flex-column ga-2 pa-5 justify-center">
              <div class="d-flex justify-center">
                <a href="tel:+45 53 34 54 66" class="text-decoration-none">
                  <img width="50" src="/assets/callUs.gif">
                </a>
              </div>
              <a href="tel:+45 53 34 54 66" class="text-decoration-none font-c-primary-2 text-center">
                +45 53 34 54 66
              </a>
              <p class="text-center font-c-primary-2">

                Hvis I er mere end 4 personer, bedes I kontakte os.
              </p>
            </div>

          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-dialog>

  <div class="container-space font font-c-secondary pt-16 pb-16 text-center bg-primary">

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
                    onclick="this.parentElement.style.display='none';">&times;</span>
                <strong>{{ message === 204 ? "Failed" : "Success" }}</strong>
                {{ message === 204 ? "Restauranten er fuld" : "Reservationen blev gennemført med succes" }}
              </div>
            </v-col>
            <template v-if="!loading && step == 2">
              <v-col cols="12">
                <v-text-field
                    :rules="rules.fullname"
                    v-model="form.fullname"
                    placeholder="fulde navn"
                    variant="outlined"
                    hide-details="auto"
                    required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-select
                    placeholder="Valgte tid"
                    dense
                    hide-details="auto"
                    :rules="rules.time"
                    v-model="form.time"
                    :items="timeSlots"
                    item-title="text"
                    item-value="value"
                    variant="outlined"
                ></v-select>
              </v-col>
              <!--              <v-col cols="12" md="6">-->
              <!--                <v-menu ref="menu" :close-on-content-click="true">-->
              <!--                  <template v-slot:activator="{ props }">-->
              <!--                    <v-text-field-->
              <!--                        placeholder="Dato"-->
              <!--                        readonly-->
              <!--                        v-bind="props"-->
              <!--                        :model-value="formatedDate()"-->
              <!--                        variant="outlined"-->
              <!--                        required-->
              <!--                    ></v-text-field>-->
              <!--                  </template>-->

              <!--                  <v-date-picker-->
              <!--                      v-model="form.date"-->
              <!--                      :max-width="$vuetify.display.width < 300 ? 250 : 380"-->
              <!--                      color="#819d7c"-->
              <!--                      :allowed-dates="allowedDates"-->
              <!--                  ></v-date-picker>-->
              <!--                </v-menu>-->
              <!--              </v-col>-->
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
                    hide-details="auto"
                    placeholder="Tilføj en note"
                    variant="outlined"
                    v-model="form.description"
                ></v-textarea>
              </v-col>
            </template>
            <v-col cols="12" v-if="step == 1 && !loading">
              <v-date-picker
                  ref="datePicker"
                  :allowed-dates="allowedDates"
                  :min="new Date()"
                  :max="new Date(new Date().setDate(new Date().getDate() + 30))"
                  v-model="form.date"/>
            </v-col>
            <v-col cols="12" v-if="step === 3 && !loading">
              <div class="d-flex align-center justify-center ga-4 w-100"
                   :class="$vuetify.display.width < 860 ? 'flex-column' : ''">
                <div v-for="(table, index) in tables" :key="index">
                  <div v-if="table.total > 0">

                    <span class="total" v-if="form.antal > 2 && table.type != 't2s'">{{ table.total }}</span>
                    <span class="total" v-if="form.antal == 2 ||form.antal == 1">{{ table.total }}</span>
                  </div>
                  <Table class="cursor-pointer"
                         v-if="table.total > 0 && form.antal <= 2"
                         @click="form.table.type = table.type; form.table.key = index"
                         :class="{ 'selected-table': form.table.type === table.type && form.table.key === index }"
                         :total="table.total"
                         :type="table.type.includes('c') ? 'c' : 's'"
                         :size="table.type.includes('2') ? 's' : ''"
                         :antal="table.number" />
                  <Table class="cursor-pointer"
                         v-if="table.total > 0 && form.antal > 2 && table.type.includes('4')"
                         @click="form.table.type = table.type; form.table.key = index"
                         :class="{ 'selected-table': form.table.type === table.type && form.table.key === index }"
                         :total="table.total"
                         :type="table.type.includes('c') ? 'c' : 's'"
                         :antal="table.number" />
                  <div v-if="table.total < 1">
                    <div>
                      <a href="tel:+45 53 34 54 66" class="text-decoration-none">
                        <img width="50" src="/assets/callUs.gif">
                        <v-tooltip activator="parent" location="end">kontakte os</v-tooltip>
                      </a>
                    </div>
                    <Table class="cursor-pointer"
                           :disable="true"
                           :total="table.total"
                           :type="table.type.includes('c') ? 'c' : 's'"
                           :size="table.type.includes('2') ? 's' : ''"
                           :antal="table.number" />
                  </div>
                </div>
              </div>
            </v-col>

          </v-row>
          <div class="mt-8">
            <!--<reservation-btn/>-->
            <div class="d-flex align-center justify-space-between w-100">
              <span v-if="step == 1"></span>
              <v-btn
                  v-if="!loading && step != 1"
                  @click="step--"
                  class="text-none"
                  color="#819d7c"
                  variant="flat"
              >
                Previous
              </v-btn>
              <!--//next btn step 1-->
              <v-btn
                  v-if="!loading && step == 1"
                  @click="step = 2"
                  class="text-none"
                  color="#819d7c"
                  variant="flat"
                  :disabled="!form.date"
              >
                Next
              </v-btn
              >
              <!-- // next btn step 2-->
              <v-btn
                  v-if="!loading && step == 2"
                  @click="step = 3; getTables(form.date,form.time)"
                  class="text-none"
                  color="#819d7c"
                  variant="flat"
                  :disabled="
                   !form.fullname
                  || !form.time
                  || !form.antal || form.antal > 4"
              >
                Next
              </v-btn>
              <v-btn
                  v-if="!loading && step == 3"
                  :disabled="spinner || !form.table.type"
                  type="submit"
                  class="text-none"
                  color="#819d7c"
                  variant="flat"
              >
                Submit
              </v-btn
              >
            </div>
          </div>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<style lang="scss">
.selected-table {
  border: 12px solid #358050;
}

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

.v-date-picker-month__day--selected .v-btn {
  background-color: #819d7c;
}

.v-date-picker-month__day--selected .v-btn__content {
  color: #fff !important;
}

.v-date-picker div:first-child .v-picker-title,
.v-date-picker div:first-child .v-picker__header {
  display: none !important;

}

.v-date-picker {
  width: 435px;
}

.v-date-picker-controls__date {
  margin-inline-end: 4px;
  font-size: 1rem;
  font-weight: 600 !important;

}

.v-btn--icon {
  border-radius: 50%;
  min-width: 0;
  width: 40px;
  height: 40px !important;
  padding: unset !important;
}

.v-date-picker-month {
  min-width: 290px;
}

.v-date-picker-month__day {
  height: 48px;
  width: 39px;
}

.v-picker.v-sheet {
  width: 100%;
}

.v-date-picker-month__day .v-btn--variant-outlined {
  background-color: #819d7c;
  color: #819d7c;
  border-radius: 50%;


}

.v-date-picker-month__day .v-btn__content {
  color: #d0d9ce;
}

/* EDITABLE */
/*
.v-date-picker-month {
  display: flex;
  justify-content: center;
  min-width: 388px;
  --v-date-picker-month-day-diff: 4px;
}
.v-date-picker-month {
  padding: 0 14px 12px;
}*/
</style>
