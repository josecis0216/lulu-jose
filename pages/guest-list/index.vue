<template>
    <section>
        <top-header />

        <b-container>
            <b-row>
                <b-col>
                    <h1>Guest List</h1>
                    <base-dialogue :show="!!error" title="An error occured!!" @close="handleError">
                        <p>{{ error }}</p>
                    </base-dialogue>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <base-card>
                        <div v-if="isLoading">
                            <base-spinner></base-spinner>
                        </div>
                        <div v-else-if="hasGuests && !isLoading">
                            <guest-item v-for="req in loadedGuests" :key="req.id" :name="req.name" :user-id="req.userId"
                                :bride-or-groom="req.brideOrGroom" :guests="req.additionalGuests"
                                :has-children="req.hasChildren"></guest-item>
                        </div>
                        <h3 v-else>You don't have any guests on your list!</h3>
                    </base-card>
                </b-col>
            </b-row>
        </b-container>

        <bottom-footer />
    </section>
</template>

<script>
import TopHeader from '@/components/nav/TopHeader.vue'
import BottomFooter from '@/components/nav/BottomFooter.vue'
import GuestItem from '@/components/Guests/GuestItem.vue'
import BaseCard from '@/components/UI/BaseCard.vue'
import BaseDialogue from '@/components/UI/BaseDialogue.vue'
import BaseSpinner from '@/components/UI/BaseSpinner.vue'

export default {
    components: {
        TopHeader,
        BottomFooter,
        GuestItem,
        BaseCard,
        BaseDialogue,
        BaseSpinner
    },
    data() {
        return {
            isLoading: false,
            error: null,
        }
    },
    computed: {
        loadedGuests() {
            //    return this.$store.getters['requests']
            return this.$store.getters.guests
        },
        hasGuests() {
            //    return this.$store.getters['hasRequests']
            return this.$store.getters.hasGuests
        },
    },
    created() {
        this.loadGuests()
    },
    methods: {
        handleError() {
            this.error = null
        },
        async loadGuests() {
            this.isLoading = true
            try {
                await this.$store.dispatch('loadGuests')
            } catch (error) {
                this.error = new Error(error.message || 'Failed to get data')
            }
            this.isLoading = false
            // console.log(this.$store.getters.requestsCount);
        },
    },
}
</script>