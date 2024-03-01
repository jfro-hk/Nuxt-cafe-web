<template>
  <TopSection class="mt-16" title="Our Menu" cls="menu-header" img="/assets/menu.png"/>
  <v-card class="mb-16" elevation="0">
    <div class="d-flex justify-space-between align-center menu-con-top">
      <span class="heading-3">{{ tabName }}</span>
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
        <v-tab v-for="tabItem in categories" :key="tabItem.id" :value="tabItem.id">{{ tabItem.name }}</v-tab>
      </v-tabs>
    </div>
    <div>
      <v-row class="justify-center mt-16">
        <template v-for="(menuGroup, index) in menus" :key="index" >
        <v-col cols="12" md="5" v-if="menuGroup.category_id == tab">
<!--            <div>{{ menuGroup.dish_title }}</div>-->
            <div class="text-right heading-5" style="border-bottom: 2px dotted">
              ${{ menuGroup.price }}
            </div>
            <div class="mt-4">
              <div class="heading-4">
                <div>{{ menuGroup.dish_title }}</div>
              </div>
              <div>{{ menuGroup.description_title }}</div>
            </div>
        </v-col>
        </template>
<!--        <v-col v-if="!menuGroup.category_id">-->
<!--          <h1 class="heading-1">There are no dishes </h1>-->
<!--        </v-col>-->
      </v-row>
    </div>
    <!--      </v-window>-->
    <!--    <v-window  v-model="onboarding" show-arrows>-->
    <!--      <v-window-item v-for="(menuGroup, index) in menus.data" :key="index">-->
    <!--        <v-container fluid v-if="menuGroup.category_id == tab">-->

    <!--          <v-row class="justify-center mt-16">-->

    <!--            <v-col cols="12" md="5">-->
    <!--              <div class="text-right heading-5" style="border-bottom: 2px dotted">-->
    <!--                ${{ menuGroup.price }}-->
    <!--              </div>-->
    <!--              <div  class="mt-4">-->
    <!--                <div class="heading-4">-->
    <!--                  <div>{{ menuGroup.dish_title }}</div>-->
    <!--&lt;!&ndash;                  <div>Cod Fillet</div> &lt;!&ndash; Assuming this is a static text &ndash;&gt;&ndash;&gt;-->
    <!--                </div>-->
    <!--                <div>{{ menuGroup.description_title }}</div>-->
    <!--              </div>-->
    <!--            </v-col>-->
    <!--          </v-row>-->
    <!--        </v-container>-->
    <!--      </v-window-item>-->
    <!--    </v-window>-->
  </v-card>
</template>
<script>
import TopSection from "@/components/TopSection.vue";
import {useFetch} from "nuxt/app";

export default {
  layout: 'menu',
  components: {TopSection},
  props:{
    menus:Object,
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
      const selectedTab = this.categories.find(tab => tab.id === this.tab);
      return selectedTab ? selectedTab.name : 'Menu';
    }
  }
};
</script>
