<template>
  <TopSection class="mt-16" title="Vores Menu" cls="menu-header" img="/assets/menu.png"/>
  <v-card class="mb-16" elevation="0">
    <div class="d-flex justify-space-between align-center menu-con-top">
      <span class="heading-3 text-capitalize">Seneste retter</span>
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
        <v-tab v-for="tabItem in menus" :key="tabItem.id" :value="tabItem.id">{{ tabItem.title }}</v-tab>
      </v-tabs>
    </div>
    <v-row  class="pa-15">

      <template v-for="(category, index) in categories" :key="index" >
<!--        <v-row>-->
      <v-col cols="12" md="6" lg="6" v-if="category.menu_id == tab">
<!--        style="filter: drop-shadow(20px 20px 20px rgba(61,94,225,0.65));"-->
        <span class="heading-3 text-capitalize d-flex justify-center align-center font-c-secondary fs-cursive" >{{category.name}}</span>
<!--        <v-row class="justify-center">-->
        <template v-for="(dish, index) in dishes" :key="index" >
        <v-col cols="12" v-if="dish.menu_id == tab && category.id == dish.category_id">
            <div class="text-right heading-5" style="border-bottom: 2px dotted">
              {{ dish.price }},-
            </div>
            <div class="mt-4">
              <div class="heading-4">
                <div>{{ dish.title }}</div>
              </div>
              <div>{{ dish.description }}</div>
            </div>
        </v-col>

        </template>

      </v-col>
      </template>

    </v-row>
  </v-card>
</template>
<script>
import TopSection from "@/components/TopSection.vue";

export default {
  layout: 'menu',
  components: {TopSection},
  props:{
    menus:Object,
    dishes:Object,
    categories:Object,
  },
  data() {
    return {
      onboarding: null,
      tab: null,
      tabName: 1,
    };
  },
  async mounted() {

  },
  computed: {
    tabName() {
      const selectedTab = this.menus.find(tab => tab.id === this.tab);
      return selectedTab ? selectedTab.title : 'Menu';
    }
  }
};
</script>
