<template>
  <div>
    <div>
      <HeaderSection />
      <MenuSection :class="$vuetify.display.xs ? 'ma-10' : ''"/>
      <CookSection />
      <ItemSection :class="$vuetify.display.xs ? 'ma-10' : ''"/>
      <FashionSection :class="$vuetify.display.xs ? 'ma-10' : ''"/>
      <ReservationSection />
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
</script>
