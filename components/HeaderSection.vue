<template>
  <div class="bg-primary py-4 font container-space">
    <!-- Section 1 -->
    <v-row
      class="font-c-primary align-center"
      :class="$vuetify.display.xs ? 'ma-5' : ''"
    >
      <v-col sm="12" md="6" cols="12">
        <div class="heading-2 mt-4">
          <div>"Oplev en skøn smagsoplevelse i hjertet af Nyborg"</div>
        </div>
      </v-col>
      <v-col class="d-none d-md-block d-lg-block" sm="12" md="6" cols="12">
        <v-img
          class="position: relative"
          style="height: 731px"
          src="/assets/header-img1.png"
        />
      </v-col>
    </v-row>

    <!-- Section 2 -->
    <v-row
      class="mt-14 font-c-primary"
      :class="$vuetify.display.xs ? 'ma-5' : ''"
    >
      <v-col cols="12" sm="12" md="6">
        <v-img src="/assets/Image.png" />
      </v-col>
      <v-col class="d-flex justify-center" cols="12" sm="12" md="6">
        <div>
          <div class="mt-14 mx-auto">
            <v-img
              class="mx-auto"
              style="max-width: 500px"
              :style="$vuetify.display.xs ? 'max-width: 350px;' : ''"
              src="/assets/Image (1).png"
            />
          </div>
          <div class="mt-14 mx-auto">
            <v-img
              class="mx-auto"
              style="max-width: 500px"
              :style="$vuetify.display.xs ? 'max-width: 350px;' : ''"
              src="/assets/Image (1).png"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
