<template>
  <div>
    <div>
      <h1 class="over-text fade-in">Lupita & Jose</h1>
      <p class="home-details">April 18, 2026 <br />SALT LAKE CITY, UT</p>
      <P class="home-details">{{ daysToGo }} DAYS TO GO</P>
    </div>
    <b-navbar>
      <b-navbar-nav class="m-auto">
        <nuxt-link to="/" class="nav-link">HOME</nuxt-link>
        <nuxt-link to="/rsvp" class="nav-link">RSVP</nuxt-link>
        <nuxt-link to="/story" class="nav-link">OUR STORY</nuxt-link>
        <nuxt-link to="/qa" class="nav-link">Q + A</nuxt-link>
        <nuxt-link to="/addresses" class="nav-link">GIVE US YOUR ADDRESS</nuxt-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      daysToGo: '',
    }
  },
  created() {
    const wD = new Date('2026-04-18')
    const d = new Date()
    const dayDiff = Math.abs(wD - d)

    this.daysToGo = Math.ceil(dayDiff / (1000 * 60 * 60 * 24))
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
}

a:hover {
  text-decoration: none;
  color: white;
}

a.nav-link {
  margin: 10px;
  font-size: 25px;
}

.nuxt-link-exact-active {
  border-bottom: 5px solid pink;
}

.over-text {
  text-align: center;
  font-size: 100px;
  font-family: 'Allura, Helvetica, sans-serif';
  letter-spacing: 15px;
}

.home-details {
  text-align: center;
  font-size: 35px;
  font-family: 'Allura, Helvetica, sans-serif';
}

.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 2s;
}

@media only screen and (max-width: 500px) {
  a.nav-link {
    margin: 0px;
    font-size: 20px;
  }

  .over-text {
    letter-spacing: 0px;
  }
}
</style>
