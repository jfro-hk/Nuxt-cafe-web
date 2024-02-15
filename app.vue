<template>
  <div>
    <div v-if="!loading" class="d-flex justify-center align-center text-center" style="height: 100vh">
      <div>
        <v-progress-circular :size="55" color="secondary" indeterminate>
          <v-avatar color="primary" size="50">
            <img src="/assets/Café.png" alt="logo" width="30px"/>
          </v-avatar>
        </v-progress-circular>
      </div>
    </div>

    <v-app v-else>
      <v-main>

        <v-dialog class="videoWrapper" width="auto" v-model="showVideo">

          <template v-slot:default="{ isActive }">
            <iframe id="youtube-video" height="315" src="https://www.youtube.com/embed/0uO0gLllYbM?si=weLaiYLkPLfhyIJ5"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
          </template>
        </v-dialog>
        <div class="bg-primary d-flex align-center font-c-secondary justify-space-between position-fixed heading-6 w-100 pr-4 pl-4 pb-4" style="z-index: 2">
          <span>Kontakt os ang. selskaber på <a href="tel:54 55 66 37" class="text-decoration-none mr-2">54 55 66 37</a></span>
           <span> tirsdag - fredag mellem kl. 11.30 - 15.30</span>

        </div>
        <top-bar :pages="pages" @sidebar="(val)=>{ drawer = !val}" class="position-fixed w-100 mt-10 mt-lg-7 mt-md-7" style="z-index: 2"/>
        <NuxtPage class="mt-16"/>
        <FooterSection/>
      </v-main>

      <v-navigation-drawer v-model="drawer" class="app-drawer" width="auto" color="#0e0f3d">
        <v-card elevation="0" style="background: #0e0f3d; color: #fff">
          <v-btn variant="text" icon class="icon-dense drawer-close ml-auto mb-4 d-block" @click="drawer = !drawer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M18.7081 5.29289C19.0986 5.68342 19.0986 6.31658 18.7081 6.70711L6.70808 18.7071C6.31756 19.0976 5.68439 19.0976 5.29387 18.7071C4.90335 18.3166 4.90335 17.6834 5.29387 17.2929L17.2939 5.29289C17.6844 4.90237 18.3176 4.90237 18.7081 5.29289Z"
                    fill="#D9D8DA"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.29387 5.29289C5.68439 4.90237 6.31756 4.90237 6.70808 5.29289L18.7081 17.2929C19.0986 17.6834 19.0986 18.3166 18.7081 18.7071C18.3176 19.0976 17.6844 19.0976 17.2939 18.7071L5.29387 6.70711C4.90335 6.31658 4.90335 5.68342 5.29387 5.29289Z"
                    fill="#D9D8DA"/>
            </svg>
          </v-btn>

          <!-- List of pages -->
          <v-list class="d-flex justify-center flex-column align-center mt-16">
            <v-list-item v-for="(item, index) in pages" :key="index" @click="navigateTo(item.route)">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-navigation-drawer>
    </v-app>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: 'App',
  components: {FooterSection, TopBar},
  data: () => ({
    showVideo: false,
    drawer: false,
    loading: false,
    pages: [
      {title: 'Home', icon: 'mdi-view-dashboard', route: '/'},
      {title: 'Menu', icon: 'mdi-account', route: '/menu'},
      {title: 'Gallery', icon: 'mdi-account', route: '/gallery'},
      {title: 'Contact', icon: 'mdi-account', route: '/contact'},
    ]
  }),
  methods: {
    navigateTo(route) {
      console.log('Navigating to:', route);
      this.$router.push(route);
    }
  },
  watch: {
    '$route'(to, from) {
      this.loading = true;
      this.drawer = false
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = true;
      this.showVideo = true;
      const iframe = document.getElementById('youtube-video');
      if (iframe) {
        const src = iframe.src;
        iframe.src = src + '&autoplay=1';
      }
    }, 3000);
  }

}
</script>
