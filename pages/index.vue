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
        <b-col sm="12" lg="6" class="text-center">
          <!-- image 1 -->
          <img src="~/static/church.jpg" class="overview-img" alt="our lady of lourdes catholic church" />
          <h2 class="details-text mt-2">Ceremony</h2>
          <h4 class="venue-title">OUR LADY OF LOURDES CATHOLIC CHURCH</h4>
          <p class="address-details">ADDRESS:</p>
          <p class="address-details"><a class="address-link" href="https://maps.app.goo.gl/mJ5KSp87Ktn3jqWYA"
              target="_blank">670 1100 E, SALT LAKE CITY, UT 84102</a></p>
          <p class="date-time">DATE & TIME</p>
          <p class="date-time">APRIL 18, 2026 @ 12pm</p>
        </b-col>
        <b-col sm="12" lg="6" class="text-center">
          <!-- image 2 -->
          <img src="~/static/gardenplace.jpg" class="overview-img" alt="this is the place garden place venue" />
          <h2 class="details-text mt-2">Reception</h2>
          <h4 class="venue-title">THE GARDEN PLACE AT HERITAGE PARK</h4>
          <p class="address-details">ADDRESS:</p>
          <p class="address-details"><a class="address-link" href="https://maps.app.goo.gl/bYtEGDAnQoSJS6Ru7"
              target="_blank">2601 EAST SUNNYSIDE AVE SALT LAKE CITY, UT 84108</a></p>
          <p class="date-time">DATE & TIME</p>
          <p class="date-time">APRIL 18, 2026 @ 3pm</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h2 class="cursive-sub-text wedding-overview-title">Additional Reception Venue Information</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <img src="~/static/garden-place-map-image.png" class="venue-img"
            alt="this is the place garden place venue map image" style="border: 1px solid black;" />
        </b-col>
      </b-row>
      <!-- <b-row>
        <b-col cols="2">
          <img src="~/static/garden-place-event-map.png" class="venue-img" alt="this is the place garden place venue map qr code" />
        </b-col>
      </b-row> -->
      <b-row class="justify-content-center">
        <b-col cols="12">
          <h2 class="cursive-sub-text">Contribute To Our Honeymoon Fund</h2>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="12" lg="6">
          <a id="venmo-link-desktop" href="https://account.venmo.com/u/lupitaa3" target="_blank">
            <img src="~/static/lulu-venmo.png" class="venmo-img" alt="lulu venmo screenshot" style="width: 100%;" />
          </a>
          <a href="venmo://paycharge?txm-pay&recipients=lupitaa3" id="venmo-link-mobile">
            <img src="~/static/lulu-venmo.png" class="venmo-img" alt="lulu venmo screenshot" style="width: 100%;" />
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
.cursive-text, .cursive-sub-text {
  text-align: center;
  font-family: 'GoldenDream';  
}

.cursive-text {
  font-size: 90px;
}

.cursive-sub-text {
  font-size: 72px;
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

.venue-img {
  width: 100%;
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

@media only screen and (max-width:768px) {
  .cursive-text {
    letter-spacing: 4px;
  }

  .cursive-sub-text {
    font-size: 60px;
    letter-spacing: 5px;
  }

  .over-text {
    font-size: 60px;
  }

  .venmo-img {
    width: 100%;
  }

  #venmo-link-desktop {
    display: none;
  }
}

@media only screen and (min-width:769px) {
  #venmo-link-mobile {
    display: none;
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
