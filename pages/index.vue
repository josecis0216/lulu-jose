<template>
  <section>
    <TopHeader />

    <div class="home-page">
      <b-container>
        <b-row>
          <b-col>
            <h1 class="cursive-text wedding-overview-title">The wedding of</h1>
            <h2 class="wedding-overview-subtitle">Lupita & Jose</h2>
          </b-col>
        </b-row>

        <b-row align-h="between">
          <b-col cols="6" lg="4">
            <p class="wedding-details">April 18, 2026</p>
          </b-col>
          <b-col cols="6" lg="4">
            <p class="wedding-details" style="text-align: right;">SALT LAKE CITY, UTAH</p>
          </b-col>
        </b-row>
        <b-row class="arrow-container">
          <b-col class="d-flex justify-content-center">
            <b-icon-arrow-down style="width: 50px; height: 50px;"></b-icon-arrow-down>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div style="background-color: #e8e2dd;">
      <b-container>
        <b-row>
          <b-col cols="12" lg="6">
            <img src="~/static/lulu-pepe-story.jpeg" alt="lulu pepe fund picture" style="width: 100%;"></img>
          </b-col>
          <b-col cols="12" lg="6">
            <h3 class="rsvp-title">Let Us Know If You Can Make It</h3>
            <p class="rsvp-text">RSVP by <br /> February 28, 2026</p>
            <p class="phone-container"><b-icon-telephone-fill></b-icon-telephone-fill><a href="sms:+18016713820">(801)
                671-3820</a></p>
            <div style="text-align: center;">
              <b-button squared class="rsvp-btn" to="/rsvp">RSVP</b-button>
            </div>
            <h3 class="honeymoon-title mt-5">Contribute To Our Honeymoon Fund</h3>
            <a id="venmo-link-desktop" href="https://account.venmo.com/u/lupitaa3" target="_blank">
              <img src="~/static/lulu-venmo-na.png" class="venmo-img" alt="lulu venmo screenshot"
                style="width: 100%;" />
            </a>
            <a href="venmo://paycharge?txm-pay&recipients=lupitaa3" id="venmo-link-mobile">
              <img src="~/static/lulu-venmo-na.png" class="venmo-img" alt="lulu venmo screenshot"
                style="width: 100%;" />
            </a>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <BottomFooter />
  </section>
</template>

<script>
import { BIconTelephoneFill, BIconArrowDown } from 'bootstrap-vue';
import TopHeader from '@/components/nav/TopHeader.vue'
import BottomFooter from '@/components/nav/BottomFooter.vue'

export default {
  name: 'IndexPage',
  components: {
    TopHeader,
    BottomFooter,
    BIconTelephoneFill,
    BIconArrowDown,
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
  .home-page {
    background-color: #e8e2dd;
  }

.cursive-text,
.cursive-sub-text {
  text-align: center;
  font-family: 'Simple-Serenity';
}

.cursive-text {
  font-size: 210px;
}

.cursive-sub-text {
  font-size: 72px;
}

.wedding-overview-subtitle {
  font-family: 'Noto-Serif';
  text-align: center;
}

.wedding-details {
  font-family: 'Tenor-Sans';
  font-size: 22px;
}

.wedding-overview-title {
  font-family: 'Simple-Serenity';
  text-align: center;
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
  .navbar-nav {
    font-size: 18px;
  }

  .home-page {
    min-height: 400px;
  }

  .cursive-text {
    letter-spacing: 4px;
  }

  .wedding-overview-title {
    font-size: 75px;
  }

  .wedding-overview-subtitle {
    font-size: 42px;
    margin-top: -35px;
  }

  .cursive-sub-text {
    font-size: 60px;
    letter-spacing: 5px;
  }

  .wedding-details {
    font-size: 14px;
  }

  .arrow-container {
    margin-top: 3rem;
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

  .rsvp-title{
    margin-top: 1rem;
  }
}

@media only screen and (min-width:769px) {
  .home-page {
    min-height: 1000px;
  }

  #venmo-link-mobile {
    display: none;
  }

  .wedding-overview-subtitle {
    font-size: 92px;
    margin-top: -65px;
  }

  .arrow-container {
    margin-top: 6rem;
  }
}

.rsvp-title,
.honeymoon-title {
  text-align: center;
}

.rsvp-title,
.rsvp-text,
.honeymoon-title {
  font-family: 'Noto-Serif';
}

.rsvp-text {
  font-size: 18pt;
  text-align: center;
}

.phone-container {
  text-align: center;
  font-size: 18pt;
}

.phone-container a {
  text-decoration: none;
  color: black;
}

.rsvp-btn {
  font-size: 16pt;
  text-align: center;
  background-color: #3c3421;
  color: white;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 1s ease;
}

.page-enter-from,
.page-enter,
.page-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
}
</style>
