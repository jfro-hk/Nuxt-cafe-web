<template>
  <div>
    <div>
      <HeaderSection />
      <CookSection />
      <ReservationSection id="reservation" :opening-times="openingTimes" />
      <FashionSection
        class="mt-12 mt-md-0 mt-lg-0"
        :gallery="gallery"
        :class="$vuetify.display.xs ? 'ma-10' : ''"
      />
    </div>
  </div>
</template>

<script setup>
import HeaderSection from "@/components/HeaderSection.vue";
import CookSection from "@/components/CookSection.vue";
import FashionSection from "@/components/FashionSection.vue";
import ReservationSection from "@/components/ReservationSection.vue";
defineProps({
  gallery: Object,
  menus: Object,
  dishes: Object,
  categories: Object,
  openingTimes: Array,
});
</script>
