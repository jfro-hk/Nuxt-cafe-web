<script setup>
import { ref } from "vue";
import moment from "moment";

const email = ref("");
</script>

<template>
  <div class="bg-secondary font text-primary pt-16 pb-8 font-c-primary">
    <div
      class="container-space"
      :class="$vuetify.display.sm || $vuetify.display.xs ? 'text-center' : ''"
    >
      <v-row>
<!--        <v-col cols="12" sm="6" md="4">-->
<!--          <div class="heading-3">-->
<!--            <div>Café</div>-->
<!--            <div>Apostrof</div>-->
<!--          </div>-->
<!--        </v-col>-->
        <v-col cols="12" sm="6" md="6">
          <div>
            <div class="heading-6">Kontakt</div>
            <div class="mt-8 text-body">
              <div> +45 00 00 00 00</div>
              <div>kontakt@apoli.dk</div>
            </div>
            <div class="mt-8 text-body">

              <div>Nyborg</div>
<!--              <div>Culver City, CA, 90230</div>-->
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <div>
            <div class="heading-6">Åbningstider</div>
            <div class="d-flex mt-5">
<!--              <h2>Åbningstider</h2>-->

              <table>
                <tr>
                  <th>Dag</th>
                  <th>Åbningstid</th>
                  <th>Lukketid</th>
                </tr>
                <tr>
                  <td>Mandag</td>
                  <td>LUKKET</td>
                  <td>LUKKET</td>
                </tr>
                <tr>
                  <td>Tirsdag</td>
                  <td>11:30</td>
                  <td>22:00</td>
                </tr>
                <tr>
                  <td>Onsdag</td>
                  <td>11:30</td>
                  <td>22:00</td>
                </tr>
                <tr>
                  <td>Torsdag</td>
                  <td>11:30</td>
                  <td>22:00</td>
                </tr>
                <tr>
                  <td>Fredag</td>
                  <td>11:30</td>
                  <td>22:00</td>
                </tr>
                <tr>
                  <td>Lørdag</td>
                  <td>11:30</td>
                  <td>22:00</td>
                </tr>
                <tr>
                  <td>Søndag</td>
                  <td>11:30</td>
                  <td>22:00</td>
                </tr>
              </table>

              <!--              <v-text-field-->
<!--                v-model="email"-->
<!--                variant="outlined"-->
<!--                label="Email Address"-->
<!--                required-->
<!--                hide-details-->
<!--              ></v-text-field>-->
<!--              <div class="pl-2">-->
<!--                <v-btn block class="text-none py-7 font-c-secondary" color="primary" variant="flat">-->
<!--                  Subscribe-->
<!--                </v-btn>-->
<!--              </div>-->
            </div>
<!--            <div class="text-caption pt-2">-->
<!--              Join our subscribers and get best recipe delivered each week!-->
<!--            </div>-->
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="mt-8" style="border-bottom: 2px dotted white" />
    <!-- <div class="container-space mt-8 d-flex justify-space-between"> -->
    <div class="container-space ">
      <v-row class="mt-8">
        <v-col class="text-caption">© {{ moment(new Date).format('YYYY') }} JH Digital Inc. All rights Reserved</v-col>
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
<style>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  //border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  //background-color: #f2f2f2;
}
</style>