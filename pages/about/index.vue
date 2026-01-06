<template>
    <section style="background-color: #e8e2dd;">
        <top-header background-color="white" />

        <div style="background-color: #e8e2dd;">
            <b-container>
                <b-row>
                    <b-col>
                        <h1 class="header-text">
                            ABOUT THE WEDDING
                        </h1>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col sm="12" lg="6" class="text-center">
                        <!-- image 1 -->
                        <img src="~/static/church.jpg" class="overview-img" alt="our lady of lourdes catholic church" />
                        <h2 class="details-text-header mt-2">The Ceremony</h2>
                        <p class="details-text">The ceremony will take place at</p>
                        <h4 class="venue-title">Our Lady of Lourdes Catholic Church</h4>
                        <p class="details-text">at 12:00 PM</p>
                        <p class="details-text"><a class="address-link" href="https://maps.app.goo.gl/mJ5KSp87Ktn3jqWYA"
                                target="_blank">670 1100 E, SALT LAKE
                                CITY, UT 84102</a>
                        </p>
                    </b-col>
                    <b-col sm="12" lg="6" class="text-center">
                        <!-- image 2 -->
                        <img src="~/static/garden-place.jpg" class="overview-img"
                            alt="this is the place garden place venue" />
                        <h2 class="details-text-header mt-2">The Reception</h2>
                        <p class="details-text">The reception will take place at</p>
                        <h4 class="venue-title">The Garden Place at Heritage Park</h4>
                        <p class="details-text">from 3:00 - 10:00 PM</p>
                        <p class="details-text"><a class="address-link" href="https://maps.app.goo.gl/bYtEGDAnQoSJS6Ru7"
                                target="_blank">2601 EAST SUNNYSIDE AVE
                                SALT LAKE CITY, UT 84108</a>
                        </p>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <div style="background-color: #ccb4a6;">
            <b-container>
                <b-row>
                    <b-col>
                        <h1 class="header-text">DIRECTIONS TO THE VENUE</h1>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <img src="~/static/garden-place-map-image.png" class="venue-img mb-4"
                            alt="this is the place garden place venue map image" style="border: 1px solid black;" />
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <div style="background-color: #e8e2dd;">
            <b-container>
                <b-row>
                    <b-col>
                        <h1 class="schedule-header">DAY OF SCHEDULE</h1>
                        <p class="schedule-date">April 18, 2026</p>
                    </b-col>
                </b-row>
                <b-row align-h="end">
                    <b-col cols="12" lg="8" align-self="end">
                        <b-container class="schedule-table">
                            <b-row>
                                <b-col cols="6" lg="3">
                                    <p>12:00 PM</p>
                                </b-col>
                                <b-col cols="6" lg="9">
                                    <p>Ceremony Begins</p>
                                    <p class="sub-text">Please arrive before noon as the ceremony will begin promptly at
                                        12:00 PM</p>
                                </b-col>
                                <div class="line-divider"></div>
                            </b-row>

                            <b-row class="mt-3">
                                <b-col cols="6" lg="3">
                                    <p>3:00 PM</p>
                                </b-col>
                                <b-col cols="6" lg="9">
                                    <p>Wedding Reception Begins</p>
                                </b-col>
                                <div class="line-divider"></div>
                            </b-row>

                            <b-row class="mt-3">
                                <b-col cols="6" lg="3">
                                    <p>4:30 PM</p>
                                </b-col>
                                <b-col cols="6" lg="9">
                                    <p>Dinner</p>
                                    <p class="sub-text">Dinner will be available until 6:30 PM</p>
                                </b-col>
                                <div class="line-divider"></div>
                            </b-row>

                            <b-row class="mt-3">
                                <b-col cols="6" lg="3">
                                    <p>5:30 PM</p>
                                </b-col>
                                <b-col cols="6" lg="9">
                                    <p>Toast & Celebration</p>
                                    <p class="sub-text">Speeches & spotlight dances will begin at 5:30 to begin the
                                        celebration</p>
                                </b-col>
                                <div class="line-divider"></div>
                            </b-row>

                            <b-row class="mt-3">
                                <b-col cols="6" lg="3">
                                    <p>9:55 PM</p>
                                </b-col>
                                <b-col cols="6" lg="9">
                                    <p>Send Off</p>
                                </b-col>
                            </b-row>
                        </b-container>
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
    font-family: 'Noto-Serif';
    text-align: center;
    padding: 15px;
}

.overview-img {
    /* border-radius: 50% / 100% 100% 0 0; */
    border-radius: 200px 200px 0 0;
    width: 50%;
    height: 300px;
}

.details-text-header {
    font-family: 'Tenor-Sans';
    font-size: 24pt;
}

.details-text {
    font-family: 'EB Garamond';
    font-size: 18pt;
    text-align: center;
}

.venue-img {
    width: 100%;
}

.venue-title {
    font-family: 'EB Garamond';
    font-size: 20pt;
}

.address-link {
    text-decoration: none;
    color: black;
    cursor: pointer;
}

img.backgroundImg {
    width: 100%;
    opacity: .75;
    padding-bottom: 25px;
}

.schedule-header {
    letter-spacing: .2rem;
    margin-top: 100px;
    text-align: left;
    font-family: 'Noto-Serif';
}

.schedule-date {
    font-family: 'Tenor-Sans';
    font-size: 14pt;
}

.schedule-table {
    font-family: 'Tenor-Sans';
    font-size: 20pt;
}

.sub-text {
    font-size: 12pt;
}

.line-divider {
    border: 1px dashed gray;
    width: 100%;
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