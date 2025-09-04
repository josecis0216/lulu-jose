<template>
    <section>
        <div style="background-color:#17a2b8;">
            <b-container>
                <b-row>
                    <b-col>
                        <h5>
                            <nuxt-link to="/addresses">GIVE US YOUR ADDRESS</nuxt-link>
                        </h5>
                        <h5 style="color:white;">
                            <nuxt-link to="/rsvp">RSVP</nuxt-link>
                        </h5>
                        <h5 style="color:white;">
                            <nuxt-link to="/story">OUR STORY</nuxt-link>
                        </h5>
                        <h5 style="color:white;">
                            <nuxt-link to="/qa">Q + A</nuxt-link>
                        </h5>
                        <h5 style="color:white;">
                            <nuxt-link to="/">HOME</nuxt-link>
                        </h5>
                    </b-col>
                    <b-col></b-col>
                    <b-col></b-col>
                </b-row>
            </b-container>
        </div>
        <div>
            <b-container>
                <b-row>
                    <b-col>
                        <div style="display:flex;justify-content:center;">
                            <p>Copyright© DEVCIS {{ currYear }}</p>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      currYear: '',
    }
  }, 
  created() {
    this.currYear = new Date().getFullYear();
  }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: white;
}

a:hover {
    text-decoration: none;
    color: black;
}

a.nav-link {
    margin: 10px;
    font-size: 25px;
}
</style>