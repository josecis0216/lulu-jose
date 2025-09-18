<template>
  <section>
    <top-header />

    <b-container>
      <b-row>
        <b-col>
           <h1 class="header-text">Our Story</h1>
        </b-col>
      </b-row>
      <b-row align-h="center" no-gutters>
        <b-col cols="12" lg="4">
            <b-row>
              <b-col>
                  <h2 class="title-header">Our First Date:</h2>
                  <p class="date-text">10.18.2019</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                  <h2 class="title-header">Our Dating Anniversary:</h2>
                  <p class="date-text">01.10.2020</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                  <h2 class="title-header">Proposal Date:</h2>
                  <p class="date-text">05.07.2025</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                  <h2 class="title-header">Wedding Date:</h2>
                  <p class="date-text">04.18.2026</p>
              </b-col>
            </b-row>
        </b-col>

        <b-col cols="12" lg="6">
          <b-row>
            <b-col cols="12">
              <img src="~/static/lupita-jose.jpeg" class="icon story-img" alt="lupita and jose image" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      
      
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
  font-family: 'GoldenDream';
  font-size: 115px;
  text-align: center;
}

.title-header {
  font-family: 'Calgary';
  font-size: 30pt;
  text-align: center;
}

.date-text {
  font-family: 'Calgary';
  font-size: 22pt;
  text-align: center;
}
</style>