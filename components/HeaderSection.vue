<template>
  <div class="bg-primary py-4 font container-space">
    <!-- Section 1 -->
    <v-row
      class="font-c-primary align-center"
      :class="$vuetify.display.xs ? 'ma-5' : ''"
    >
      <v-col sm="12" md="12" cols="12">
        <div class="heading-2 mt-4">
          <div>
            "Vores retter er inspireret af Italien og lavet både med italiensk
            importeret lækkerier og gode danske råvarer"
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Section 2 -->
    <v-row
      class="mt-14 font-c-primary"
      :class="$vuetify.display.xs ? 'ma-5' : ''"
    >
      <v-col cols="12" sm="12" md="6">
        <v-img style="max-width: 600px" max-height="500px" src="/assets/Image.png" />
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-img style="max-width: 600px" max-height="500px"  src="/assets/avo.jpg" />
      </v-col>
      <!-- <v-col cols="12" sm="12" md="6" class="justify-end d-flex">
        <img
          src="/assets/lem.jpg"
          style="max-width: 600px"
          :style="$vuetify.display.xs ? 'max-width: 350px;' : ''"
        />
      </v-col> -->
      <!--      <v-col class="d-flex justify-center" cols="12" sm="12" md="6">-->
      <!--        <div>--> 
      <!--&lt;!&ndash;          <div class="mt-14 mx-auto">&ndash;&gt;-->
      <!--&lt;!&ndash;            <v-img&ndash;&gt;-->
      <!--&lt;!&ndash;              class="mx-auto"&ndash;&gt;-->
      <!--&lt;!&ndash;              style="max-width: 500px"&ndash;&gt;-->
      <!--&lt;!&ndash;              :style="$vuetify.display.xs ? 'max-width: 350px;' : ''"&ndash;&gt;-->
      <!--&lt;!&ndash;              src="/assets/Image (1).png"&ndash;&gt;-->
      <!--&lt;!&ndash;            />&ndash;&gt;-->
      <!--&lt;!&ndash;          </div>&ndash;&gt;-->
      <!--          <div class="mt-14 mx-auto">-->
      <!--            <v-img-->
      <!--              class="mx-auto"-->
      <!--              style="max-width: 500px"-->
      <!--              :style="$vuetify.display.xs ? 'max-width: 350px;' : ''"-->
      <!--             src="/assets/Image.png"-->
      <!--            />-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </v-col>-->
    </v-row>
  </div>
</template>
