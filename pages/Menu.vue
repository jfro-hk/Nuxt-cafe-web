<template>
  <!--  <v-container>-->
  <TopSection class="mt-16" cls="menu-header" img="/assets/menu.png"/>
  <!--    <MenuSection/>-->
  <v-card class="mb-16" elevation="0">
    <div class="d-flex justify-space-between align-center menu-con-top">
<!--    <v-row>-->
<!--    <v-col>-->
      <span class="heading-3">{{ tabName }}</span>
<!--    </v-col>-->
<!--      <v-col>-->
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center" @change="handleTabChange">
          <v-tab v-for="tabItem in tabs" :key="tabItem.value" :value="tabItem.value">{{ tabItem.name }}</v-tab>
        </v-tabs>
<!--      </v-col>-->
<!--    </v-row>-->
    </div>
    <v-window v-model="tab" retain-focus>
      <v-window-item v-for="n in 3" :key="n" :value="n">
        <v-container fluid>
          <v-row class="justify-center mt-16">
            <v-col v-for="i in 6" :key="i" cols="12" md="5">
              <div class="text-right heading-5" style="border-bottom: 2px dotted">$20</div>
              <div class="mt-4">
                <div class="heading-4">
                  <div>Deep Sea Snow White</div>
                  <div>Cod Fillet</div>
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
  <!--  </v-container>-->
</template>
<script>

import TopSection from "@/components/TopSection.vue";
import FashionSection from "@/components/FashionSection.vue";
export default {
  components: {FashionSection, TopSection },
  data: () => ({
    tab: null,
    tabName: 'Your Tab Name',
    tabs: [
      { value: 1, name: 'Starter' },
      { value: 2, name: 'Dessert' },
      { value: 3, name: 'Breakfast' },
    ],
  }),
  watch: {
    tab(newTab) {
      const selectedTab = this.tabs.find(tab => tab.value === newTab);
      this.tabName = selectedTab ? selectedTab.name : 'Menu';
    },
  },
};


</script>