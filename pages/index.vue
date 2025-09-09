<template>
  <section>

    <!-- <div class="header-img">
      <img src="~/static/sunflower.png" alt="sunflower header image" class="header-sunflower-img" />
    </div> -->
    <TopHeader />

    <b-container>
      <b-row>
        <b-col>
          <h1 class="cursive-text wedding-overview-title">Wedding Overview</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <!-- image 1 -->
           <img src="~/static/church.jpg" class="overview-img" alt="our lady of lourdes catholic church" />
           <h2 class="details-text">Ceremony</h2>
           <h4>OUR LADY OF LOURDES CATHOLIC CHURCH</h4>
           <p class="address-details">ADDRESS:</p>
           <p class="address-details">670 1100 E, SALT LAKE CITY, UT 84102</p>
           <p class="date-time">DATE & TIME</p>
           <p class="date-time">APRIL 18, 2026 @ 12pm</p>
        </b-col>
        <b-col>
          <!-- image 2 -->
           <h2 class="details-text">Reception</h2>
           <h4>THE GARDEN PLACE AT HERITAGE PARK</h4>
           <p class="address-details">ADDRESS:</p>
           <p class="address-details">2601 EAST SUNNYSIDE AVE SALT LAKE CITY, UT 84108</p>
           <p class="date-time">DATE & TIME</p>
           <p class="date-time">APRIL 18, 2026 @ 3pm</p>
        </b-col>
      </b-row>
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

.wedding-overview-title {
  text-align: center;
}

.overview-img {
  border-radius: 50% / 100% 100% 0 0;
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

.address-details {
  text-align: center;
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
