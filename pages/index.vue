<template>
  <section>

    <!-- <div class="header-img">
      <img src="~/static/sunflower.png" alt="sunflower header image" class="header-sunflower-img" />
    </div> -->
    <TopHeader />

    <b-container>
      <b-row>
        <b-col>
          <img v-show="loaded" src="~/static/lupita-jose.jpeg" class="icon backgroundImg" @load="onLoaded" />
          <h2 class="home-details">Contribute To Our Honeymoon Fund</h2>
          <a href="https://account.venmo.com/u/Clarissa-Avila-2">
            <img src="~/static/clarissa-venmo.jpg" class="venmo-img" alt="clarissa venmo screenshot" />
          </a>
        </b-col>
      </b-row>
    </b-container>

    <BottomFooter />
  </section>
</template>

<script>
import TopHeader from '@/components/nav/TopHeader.vue'
import BottomFooter from '@/components/nav/BottomFooter.vue'

export default {
  name: 'IndexPage',
  components: {
    TopHeader,
    BottomFooter,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      src: '/public/images/lupita-jose.jpeg',
      loaded: false,
    }
  },
  methods: {
    onLoaded() {
      this.loaded = true
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style scoped>
.header-img {
  text-align: center;
}

img.backgroundImg {
  width: 100%;
  opacity: .75;
  padding-bottom: 25px;
}

.home-details {
  text-align: center;
  font-size: 35px;
  font-family: 'Allura, Helvetica, sans-serif';
}

.venmo-img {
  text-align: center;
}

.fade-enter-active {
  transition: opacity 3s ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}

@media only screen and (max-width:500px) {
  img.header-sunflower-img {
    width: 100%;
  }

  .venmo-img {
    width: 100%;
  }
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
