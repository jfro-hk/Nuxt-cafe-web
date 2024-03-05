<template>
  <div>
    <div>
      <HeaderSection />
      <MenuSection :dishes="dishes" :class="$vuetify.display.xs ? 'ma-10' : ''"/>
      <CookSection />
<!--      <ItemSection class="mt-10" :class="$vuetify.display.xs ? 'ma-10' : ''"/>-->
      <FashionSection class="mt-12 mt-md-0 mt-lg-0" :gallery="gallery" :class="$vuetify.display.xs ? 'ma-10' : ''"/>
      <ReservationSection id="reservation" :opening-times="openingTimes" />
      <CalorieSection :class="$vuetify.display.xs ? 'ma-10' : ''"/>
    </div>
  </div>
</template>

<script setup>
import HeaderSection from "@/components/HeaderSection.vue";
import MenuSection from "@/components/MenuSection.vue";
import CookSection from "@/components/CookSection.vue";
import ItemSection from "@/components/ItemSection.vue";
import FashionSection from "@/components/FashionSection.vue";
import ReservationSection from "@/components/ReservationSection.vue";
import CalorieSection from "@/components/CalorieSection.vue";
defineProps({
  gallery:Object,
  menus:Object,
  dishes:Object,
  categories:Object,
  openingTimes:Array,
})
</script>
