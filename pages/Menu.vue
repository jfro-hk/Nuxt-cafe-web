<template>
  <TopSection class="mt-16" title="Our Menu" cls="menu-header" img="/assets/menu.png"/>
  <v-card class="mb-16" elevation="0">
    <div class="d-flex justify-space-between align-center menu-con-top">
      <span class="heading-3 text-capitalize">Latest Dishes</span>
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
        <v-tab v-for="tabItem in menus" :key="tabItem.id" :value="tabItem.id">{{ tabItem.title }}</v-tab>
      </v-tabs>
    </div>
    <v-row  class="pa-15">

      <template v-for="(category, index) in categories" :key="index" >
<!--        <v-row>-->
      <v-col cols="12" md="6" lg="6" v-if="category.menu_id == tab">
        <span class="heading-3 text-capitalize d-flex justify-center align-center font-c-secondary" style="filter: drop-shadow(20px 20px 20px rgba(61,94,225,0.65));">{{category.name}}</span>
<!--        <v-row class="justify-center">-->
        <template v-for="(dish, index) in dishes" :key="index" >
        <v-col cols="12" v-if="dish.menu_id == tab && category.id == dish.category_id">
            <div class="text-right heading-5" style="border-bottom: 2px dotted">
              ${{ dish.price }}
            </div>
            <div class="mt-4">
              <div class="heading-4">
                <div>{{ dish.title }}</div>
              </div>
              <div>{{ dish.description }}</div>
            </div>
        </v-col>

        </template>

<!--        <v-col v-if="!menuGroup.category_id">-->
<!--          <h1 class="heading-1">There are no dishes </h1>-->
<!--        </v-col>-->

<!--      </v-row>-->
      </v-col>
      </template>

    </v-row>
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
