<template>
  <section>
    <top-header />

    <b-container>
      <b-row>
        <b-col>
            <h1 class="header-text">Our Story</h1>
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