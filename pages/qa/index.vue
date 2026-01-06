<template>
    <section>
        <top-header />

        <div style="background-color: #ccb4a6;min-height:700px;">
            <b-container>
                <b-row>
                    <b-col>
                        <h1 class="header-text">FREQUENTY ASKED Q's</h1>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="6" lg="4">
                        <h4 class="question-text">Can I bring a +1?</h4>
                        <p class="answer-text">
                            Due to limited space in our venue, we are only able to accomodate guests listed on the
                            invitation.
                            If you have received a plus one it will appear on your invitation and under your name when
                            you RSVP.
                            Thank you for understanding!
                        </p>
                    </b-col>
                    <b-col cols="6" lg="4">
                        <h4 class="question-text">Are children allowed?</h4>
                        <p class="answer-text">
                            We would love to celebrate with you and your little one! Please notes that due to venue
                            space,
                            babies are welcome to join on laps as we are unable to provide extra seating for them.
                        </p>
                    </b-col>
                    <b-col cols="6" lg="4">
                        <h4 class="question-text">What should I wear?</h4>
                        <p class="answer-text">
                            The only dress code we ask you to follow is please dress semi-formal and please do not wear
                            white.
                            Our wedding scheme is blush pink and black.
                        </p>
                    </b-col>
                    <b-col cols="6" lg="4">
                        <h4 class="question-text">Where can we find your gift registry? </h4>
                        <p class="answer-text">
                            We are fortunate to have all that we need for our home. If you'd like to give a gift, a
                            contribution to our honeymoon fund will help us create lasting memories.
                        </p>
                    </b-col>
                    <b-col cols="6" lg="4">
                        <a id="venmo-link-desktop" href="https://account.venmo.com/u/lupitaa3" target="_blank">
                            <img src="~/static/venmo-icon.png" class="venmo-img"
                                alt="venmo link for lulu honeymoon fund"
                                style="display:inline;align-items:center; width:150px;height:150px;" />
                        </a>
                        <a href="venmo://paycharge?txm-pay&recipients=lupitaa3" id="venmo-link-mobile"><img
                                style="display:inline;align-items:center; width:150px;height:150px;"
                                src="~/static/venmo-icon.png" alt="venmo link for lulu honeymoon fund" /></a>
                    </b-col>
                </b-row>
            </b-container>
        </div>

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
    font-family: 'Noto-Serif';
    margin-top: 50px;
    margin-bottom: 25px;
}

.question-text,
.answer-text {
    font-family: 'Tenor-Sans';
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