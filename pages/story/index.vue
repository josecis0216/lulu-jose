<template>
  <section style="background-color: #ccb4a6;">
    <top-header />

    <b-container class="our-story">
      <b-row>
        <b-col>
          <h1 class="header-text">Our Story</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="8" lg="6" class="mb-2">
          <img src="~/static/lulu-pepe-fund.jpg" alt="lulu and pepe image" class="our-story-image"
            style="width: 100%;"></img>
        </b-col>
        <b-col cols="4" lg="6"> <!-- lg="6" order-lg="1" -->
          <div class="first-date">
            <h2 class="title-header">Our First Date:</h2>
            <p class="date-text">10.18.2019</p>
          </div>
          <div class="date-ann">
            <h2 class="title-header">Our Dating Anniversary:</h2>
            <p class="date-text">01.10.2020</p>
          </div>
          <div class="prop-date">
            <h2 class="title-header">Engagement Date:</h2>
            <p class="date-text">05.07.2025</p>
          </div>
          <div class="wed-date">
            <h2 class="title-header">Wedding Date:</h2>
            <p class="date-text">04.18.2026</p>
          </div>
        </b-col>
      </b-row>
      <!-- <b-row align-h="center" no-gutters>
        <b-col cols="12" lg="6">
          <b-row>
            <b-col cols="12">
              <img src="~/static/lupita-jose.jpeg" class="icon story-img" alt="lupita and jose image" />
            </b-col>
          </b-row>
        </b-col>
      </b-row> -->
    </b-container>

    <bottom-footer />
  </section>
</template>

<script>
import TopHeader from '@/components/nav/TopHeader.vue'
import BottomFooter from '@/components/nav/BottomFooter.vue'

export default {
  components: {
    TopHeader,
    BottomFooter,
  },
}
</script>

<style scoped>
.story-img {
  width: 100%;
  height: auto;
  opacity: 0.6;
  margin-bottom: 10px;
}

.header-text {
  font-family: 'Simple-Serenity';
  font-size: 115px;
  text-align: center;
}

.title-header {
  font-family: 'EB Garamond';
  font-size: 30pt;
  text-align: center;
}

.date-text {
  font-family: 'EB Garamond';
  font-size: 22pt;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  .our-story {
    min-height: 600px;
  }

  .header-text {
    font-size: 75px;
  }

  .title-header {
    font-size: 14pt;
  }

  .date-text {
    font-size: 12pt;
  }
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