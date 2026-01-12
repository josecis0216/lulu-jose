<template>
    <section>
        <top-header />

        <b-container v-show="!isEdit">
            <b-row>
                <b-col>
                    <h1>Guest List</h1>
                    <base-dialogue :show="!!error" title="An error occured!!" @close="handleError">
                        <p>{{ error }}</p>
                    </base-dialogue>
                </b-col>
            </b-row>
            <b-row>
                <b-col v-for="req in loadedGuests" :key="req.id" cols="6">
                    <base-card>
                        <div v-if="isLoading">
                            <base-spinner></base-spinner>
                        </div>
                        <div v-else-if="hasGuests && !isLoading">

                            <guest-item :guest_id="req.user_id" :name="req.name" :user-id="req.userId"
                                :bride-or-groom="req.brideOrGroom" :guests="req.additionalGuests"
                                :has-children="false"></guest-item>

                        </div>
                        <h3 v-else>You don't have any guests on your list!</h3>
                    </base-card>
                    <!-- <base-card>
                        <div v-if="isLoading">

                        </div>
                        <div v-else-if="hasGuests && !isLoading">
                            <guest-item v-for="req in loadedGuests" :key="req.id" :guest_id="req.user_id"
                                :name="req.name" :user-id="req.userId" :bride-or-groom="req.brideOrGroom"
                                :guests="req.additionalGuests" :has-children="false"></guest-item>
                        </div>
                        <h3 v-else>You don't have any guests on your list!</h3>
                    </base-card> -->
                </b-col>
            </b-row>
        </b-container>

        <b-container v-show="isEdit">
            <b-row>
                <b-col v-for="(guest, k) in loadedGuests" :key="k" cols="6">
                    <b-form @submit.prevent="onSubmit">
                        <b-form-group id="input-group-0" label="Guest ID:" label-for="input-0">
                            <b-form-input id="input-0" v-model.number="guest.user_id">
                            </b-form-input>
                        </b-form-group>

                        <b-button type="submit" variant="primary">Update Guest</b-button>
                    </b-form>
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
            isEdit: false,
            form: {
                user_id: 0,
                name: '',
                brideOrGroom: [],
                additionalGuests: [{
                    name: ''
                }],
                hasChildren: false
            }
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
                await this.$store.dispatch('loadGuests');
            } catch (error) {
                this.error = new Error(error.message || 'Failed to get data')
            }
            this.isLoading = false
            // console.log(this.$store.getters.requestsCount);
        },
        toggleEdit() {
            this.isEdit = !this.isEdit;
        },
        onSubmit(event) {
            console.log(this.form);
            // this.$store.dispatch('updateGuest', this.form).then(() => {
            // alert('Guest has been updated to db.');
            // this.$router.push('/');
            // this.clearForm();
            // })
            // console.log('SUCCESS! Guest was updated');
            // this.loadGuestCount();
        },
    }
}
</script>