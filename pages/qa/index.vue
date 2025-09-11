<template>
    <section>
        <top-header />

        <b-container>
            <b-row>
                <b-col>
                    <h1 class="header-text">Q + A</h1>
                </b-col>
            </b-row>
            <b-row>
                <b-col>                    
                    <p>
                        <span class="q-text">Q: Where can we find your gift registry?</span><br>
                        A: We appreciate any gift or even just having you celebrate with us; however, we are looking mostly
                        for a honeymoon fund. You can Venmo us here:
                        <a href="https://account.venmo.com/u/Clarissa-Avila-2"><img
                                style="display:inline;align-items:center; width:150px;height:150px;"
                                src="~/static/venmo-icon.png" alt="venmo link for clarissa honeymoon fund" /></a>
                    </p>
                    <p>
                        <span class="q-text">Q: Where to park for reception ceremony?</span><br>
                        A: Please park at Rosewood Park (1400 N 1200 W, Salt Lake City, UT). The park is located right
                        behind the location of the reception.
                    </p>
                    <p>
                        <span class="q-text">Q: Why aren't children allowed?</span><br>
                        A: Unfortunately, we can only accomodate a certain number of guests. So, we hope you understand and
                        still come celebrate with us!
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
</style>