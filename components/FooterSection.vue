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
        <v-col cols="12" sm="6" md="6">
          <div>
            <div class="heading-6">Kontakt</div>
            <div class="mt-8 text-body">
              <div>+45 53 34 54 66</div>
              <div>kontakt@apoli.dk</div>
            </div>
            <div class="mt-8 text-body">
              <div>Slotsgade 9 5800 Nyborg</div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <div>
            <div class="heading-6">Åbningstider</div>
            <div class="d-flex mt-5">
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
                  <td>09:00</td>
                  <td>22:00</td>
                </tr>
                <tr>
                  <td>Onsdag</td>
                  <td>09:00</td>
                  <td>22:00</td>
                </tr>
                <tr>
                  <td>Torsdag</td>
                  <td>09:00</td>
                  <td>22:00</td>
                </tr>
                <tr>
                  <td>Fredag</td>
                  <td>09:00</td>
                  <td>22:00</td>
                </tr>
                <tr>
                  <td>Lørdag</td>
                  <td>09:00</td>
                  <td>22:00</td>
                </tr>
                <tr>
                  <td>Søndag</td>
                  <td>09:00</td>
                  <td>15:00</td>
                </tr>
              </table>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="mt-8" style="border-bottom: 2px dotted white" />
    <div class="container-space">
      <v-row class="mt-8">
        <v-col class="text-caption"
          >© {{ moment(new Date()).format("YYYY") }} JH Digital Inc. All rights
          Reserved</v-col
        >
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
th,
td {
  padding: 8px;
  text-align: left;
}
</style>
