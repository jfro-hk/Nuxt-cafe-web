<template>
  <TopSection
    class="mt-16"
    title="Vores Menu"
    cls="menu-header"
    img="/assets/menu.JPG"
  />
  <v-card class="mb-16" elevation="0">
    <div class="d-flex justify-space-between align-center menu-con-top">
      <span class="heading-3 text-capitalize">Seneste retter</span>
      <v-tabs v-model="tab" color="#819d7c" align-tabs="center">
        <v-tab v-for="tabItem in menus" :key="tabItem.id" :value="tabItem.id">{{
          tabItem.title
        }}</v-tab>
      </v-tabs>
    </div>
    <v-row class="pa-15">
      <template v-for="(category, index) in categories" :key="index">
        <v-col cols="12" md="6" lg="6" v-if="category.menu_id == tab">
          <span
            class="heading-3 text-capitalize d-flex justify-center align-center font-c-secondary fs-cursive"
            >{{ category.name }}</span
          >

          <template v-for="(dish, index) in dishes" :key="index">
            <v-col
              cols="12"
              v-if="dish.menu_id == tab && category.id == dish.category_id"
            >
              <div
                class="text-right heading-8"
                style="border-bottom: 2px dotted"
              >
                {{ dish.price }},-
              </div>
              <div class="mt-4">
                <div class="heading-6">
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
  layout: "menu",
  components: { TopSection },
  props: {
    menus: Object,
    dishes: Object,
    categories: Object,
  },
  data() {
    return {
      onboarding: null,
      tab: null,
      tabName: 1,
    };
  },
  async mounted() {},
  computed: {
    tabName() {
      const selectedTab = this.menus.find((tab) => tab.id === this.tab);
      return selectedTab ? selectedTab.title : "Menu";
    },
  },
};
</script>
