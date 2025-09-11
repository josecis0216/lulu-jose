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
        <b-col class="text-center">
          <!-- image 1 -->
           <img src="~/static/church.jpg" class="overview-img" alt="our lady of lourdes catholic church" />
           <h2 class="details-text mt-2">Ceremony</h2>
           <h4 class="venue-title">OUR LADY OF LOURDES CATHOLIC CHURCH</h4>
           <p class="address-details">ADDRESS:</p>
           <p class="address-details"><a class="address-link" href="https://maps.app.goo.gl/mJ5KSp87Ktn3jqWYA" target="_blank">670 1100 E, SALT LAKE CITY, UT 84102</a></p>
           <p class="date-time">DATE &amp; TIME</p>
           <p class="date-time">APRIL 18, 2026 @ 12pm</p>
        </b-col>
        <b-col class="text-center">
          <!-- image 2 -->
          <img src="~/static/gardenplace.jpg" class="overview-img" alt="this is the place garden place venue" />
           <h2 class="details-text mt-2">Reception</h2>
           <h4 class="venue-title">THE GARDEN PLACE AT HERITAGE PARK</h4>
           <p class="address-details">ADDRESS:</p>
           <p class="address-details"><a class="address-link" href="https://maps.app.goo.gl/bYtEGDAnQoSJS6Ru7" target="_blank">2601 EAST SUNNYSIDE AVE SALT LAKE CITY, UT 84108</a></p>
           <p class="date-time">DATE &amp; TIME</p>
           <p class="date-time">APRIL 18, 2026 @ 3pm</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <img v-show="loaded" src="~/static/lupita-jose.jpeg" class="icon backgroundImg" @load="onLoaded" />
          <h2 class="cursive-text">Contribute To Our Honeymoon Fund</h2>
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
.cursive-text {
  text-align: center;
  font-family: 'GoldenDream';
  font-size: 90px;
}

.header-img {
  text-align: center;
}

.wedding-overview-title {
  text-align: center;
}

.overview-img {
  /* border-radius: 50% / 100% 100% 0 0; */
  border-radius: 200px 200px 0 0;
  width: 50%;
  height: 300px;
}

.venue-title {
  font-family: 'RoleModel';
  font-size: 20pt;
}

.details-text {
  font-family: 'RoleModel';
  font-size: 16pt;
}

.address-details {
  font-family: 'RoleModel';
  font-size: 16pt;
}

.address-link {
  text-decoration: none;
  color: black;
  cursor: pointer;
}

.date-time {
  font-family: 'RoleModel';
  font-size: 16pt;
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
