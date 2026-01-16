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
                <b-col v-for="req in loadedGuests" :key="req.id" cols="12" lg="4" class="h-100">
                    <base-card>
                        <div v-if="isLoading">
                            <base-spinner></base-spinner>
                        </div>
                        <div v-else-if="hasGuests && !isLoading">

                            <guest-item :guest_id="req.user_id" :name="req.name" :user-id="req.userId"
                                :bride-or-groom="req.brideOrGroom" :guests="req.additionalGuests"
                                :has-children="req.hasChildren"></guest-item>

                        </div>
                        <h3 v-else>You don't have any guests on your list!</h3>
                        <button class="btn btn-sm btn-primary mt-auto" @click="openEditor(req)">
                            Edit
                        </button>

                        <div v-if="editingGuestId === req.id" class="mt-3">
                            <form @submit.prevent="saveGuest">
                                <b-form-group id="input-group-1" label="Guest ID:" label-for="input-1">
                                    <b-form-input id="input-1" v-model.number="editForm.user_id">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="input-group-2" label="Guest Name:" label-for="input-2">
                                    <b-form-input id="input-2" v-model="editForm.name" required></b-form-input>
                                </b-form-group>

                                <b-form-group v-for="(guest, k) in editForm.additionalGuests" :key="k">
                                    <b-row>
                                        <b-col>
                                            <b-form-input type="text" class="form-control"
                                                v-model="guest.name"></b-form-input>
                                        </b-col>
                                        <b-col>
                                            <b-form-checkbox v-model="guest.child">Child</b-form-checkbox>
                                        </b-col>
                                        <b-col>
                                            <span>
                                                <b-button pill variant="outline-danger" @click="remove(k)"
                                                    v-show="k || (!k && editForm.additionalGuests.length > 0)">Remove</b-button>
                                            </span>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col>
                                            <b-button style="margin-top:10px;" pill variant="outline-success"
                                                @click="add(k)" v-show="k == editForm.additionalGuests.length - 1">Add
                                                Guest</b-button>
                                        </b-col>
                                    </b-row>
                                </b-form-group>

                                <label>
                                    <input type="checkbox" v-model="editForm.hasChildren" />
                                    Has Children
                                </label>

                                <div class="mt-2">
                                    <button class="btn btn-success btn-sm">Save</button>
                                    <button class="btn btn-secondary btn-sm" @click="cancelEdit">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
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
// import BaseDialogue from '@/components/UI/BaseDialogue.vue'
import BaseSpinner from '@/components/UI/BaseSpinner.vue'

export default {
    components: {
        TopHeader,
        BottomFooter,
        GuestItem,
        BaseCard,
        BaseSpinner,
        BaseDialogue: () => import('@/components/UI/BaseDialogue.vue')
    },
    data() {
        return {
            isLoading: false,
            error: null,
            isEdit: false,
            editingGuestId: null,
            editForm: null,
            showGuests: false,
        }
    },
    computed: {
        loadedGuests() {
            return this.$store.getters.guests
        },
        hasGuests() {
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
        },
        toggleEdit() {
            this.isEdit = !this.isEdit;
        },
        openEditor(guest) {
            this.editingGuestId = guest.id;

            // Pre-fill form
            this.editForm = {
                id: guest.id,
                user_id: guest.user_id,
                name: guest.name,
                brideOrGroom: guest.brideOrGroom,
                // additionalGuests: guest.additionalGuests,
                additionalGuests: JSON.parse(JSON.stringify(guest.additionalGuests || [])),
                hasChildren: guest.hasChildren
            };
        },

        async saveGuest() {
            await this.$store.dispatch("updateGuest", this.editForm);
            this.editingGuestId = null;
            this.editForm = null;
        },

        cancelEdit() {
            this.editingGuestId = null;
            this.editForm = null;
        },

        showAddGuests() {
            this.showGuests = true
        },

        add() {
            this.editForm.additionalGuests.push({
                name: ''
            });
            console.log(this.editForm.additionalGuests);
        },

        remove(index) {
            this.editForm.additionalGuests.splice(index, 1)
            console.log(this.editForm.additionalGuests)
        },
    }
}
</script>