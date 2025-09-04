<template>
    <div>
        <top-header />

        <base-dialogue :show="!!error" title="An error occured!!" @close="handleError">
            <p>{{ error }}</p>
        </base-dialogue>
        <base-card>
            <header>
                <h2>Responses Received</h2>
            </header>
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <div v-else-if="hasResponses && !isLoading">
                <request-item v-for="req in receivedResponses" :key="req.id" :full-name="req.fullName"
                    :bride-or-groom="req.brideOrGroom" :guests="req.guests"></request-item>
            </div>
            <h3 v-else>You haven't received any responses yet!</h3>
        </base-card>

        <bottom-footer />
    </div>
</template>
  
<script>
import TopHeader from '@/components/nav/TopHeader.vue'
import BottomFooter from '@/components/nav/BottomFooter.vue'
import RequestItem from '@/components/Requests/RequestItem.vue'
import BaseCard from '@/components/UI/BaseCard.vue'
import BaseDialogue from '@/components/UI/BaseDialogue.vue'
import BaseSpinner from '@/components/UI/BaseSpinner.vue'

export default {
    components: {
        TopHeader,
        BottomFooter,
        RequestItem,
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
        receivedResponses() {
            //    return this.$store.getters['requests']
            return this.$store.getters.requests
        },
        hasResponses() {
            //    return this.$store.getters['hasRequests']
            return this.$store.getters.hasRequests
        },
    },
    created() {
        this.loadRequests()
    },
    methods: {
        handleError() {
            this.error = null
        },
        async loadRequests() {
            this.isLoading = true
            try {
                await this.$store.dispatch('loadRequests')
            } catch (error) {
                this.error = new Error(error.message || 'Failed to get data')
            }
            this.isLoading = false
            // console.log(this.$store.getters.requestsCount);
        },
    },
}
</script>
  