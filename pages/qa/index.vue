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
                <b-col cols="9">
                    <p class="q-text">Q: Where can we find your gift registry?</p>
                    <p>
                        A: We appreciate any gift or even just having you celebrate with us; however, we are looking mostly
                        for a honeymoon fund. You can Venmo us here:
                    </p>
                </b-col>
                <b-col cols="3">
                    <a href="https://account.venmo.com/u/Clarissa-Avila-2"><img
                        style="display:inline;align-items:center; width:150px;height:150px;"
                        src="~/static/venmo-icon.png" alt="venmo link for clarissa honeymoon fund" /></a>
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