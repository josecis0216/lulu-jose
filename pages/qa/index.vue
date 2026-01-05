<template>
    <section>
        <top-header />

        <b-container>
            <b-row>
                <b-col>
                    <h1 class="header-text">Q <span style="font-size:50px;">and</span> A</h1>
                </b-col>
            </b-row>
            <b-row style="max-width:800px;margin:auto;" no-gutters class="mb-3">
                <b-col sm="8" lg="9">
                    <p class="q-text">Q: Where can we find your gift registry?</p>
                    <p>
                        A: We are fortunate to have all that we need for our home. If you'd like to give a gift,
                        a contribution to our honeymoon fund will help us create lasting memories.
                    </p>
                </b-col>
                <b-col sm="4" lg="3">
                    <a id="venmo-link-desktop" href="https://account.venmo.com/u/lupitaa3" target="_blank">
                        <img src="~/static/venmo-icon.png" class="venmo-img" alt="venmo link for lulu honeymoon fund"
                            style="display:inline;align-items:center; width:150px;height:150px;" />
                    </a>
                    <a href="venmo://paycharge?txm-pay&recipients=lupitaa3"
                        id="venmo-link-mobile"><img style="display:inline;align-items:center; width:150px;height:150px;"
                            src="~/static/venmo-icon.png" alt="venmo link for lulu honeymoon fund" /></a>
                </b-col>
            </b-row>
            <b-row style="max-width:800px;margin:auto;" no-gutters class="mb-3">
                <b-col>
                    <p class="q-text">Q: Can I bring a plus one?</p>
                    <p>
                        A: Due to limited space, we are only able to accommodate guests listed on the invitation. If you
                        received a plus one, it will appear on your invitation and under your name when you RSVP. Thank
                        you for understanding!
                    </p>
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
        BottomFooter
    }
}
</script>

<style scoped>
.header-text {
    font-family: 'GoldenDream';
    font-size: 105px;
    text-align: center;
}
.q-text {
    color: red;
}

@media only screen and (max-width:768px) {
  #venmo-link-desktop {
    display: none;
  }
}

@media only screen and (min-width:769px) {
  #venmo-link-mobile {
    display: none;
  }
}
</style>