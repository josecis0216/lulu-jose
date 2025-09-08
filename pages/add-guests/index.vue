<template>
    <section>
        <div>
            <TopHeader />
            <div class="sectionBody">
                <b-container>
                    <b-row>
                        <b-col>
                            <b-card style="max-width:600px;margin:auto;">
                                <div class="form-container">
                                    <h2>Add guests to db </h2>
                                    <div>
                                        <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
                                            <b-row>
                                                <b-col>
                                                    <b-form-group id="input-group-2" label="Guest Name:"
                                                        label-for="input-2">
                                                        <b-form-input id="input-2" v-model="form.name"
                                                            placeholder="Enter name" required></b-form-input>
                                                    </b-form-group>
                                                </b-col>
                                            </b-row>

                                            <b-row>
                                                <b-col>
                                                    <b-button pill variant="outline-success" @click="showAddGuests" v-show="!showGuests">Add
                                                        Guest</b-button>

                                                    <b-form-group v-for="(guest, k) in form.additionalGuests" :key="k" v-show="showGuests">
                                                        <b-row>
                                                            <b-col>
                                                                <b-form-input type="text" class="form-control" placeholder="Guest Name"
                                                                    v-model="guest.name"></b-form-input>
                                                            </b-col>
                                                            <b-col>
                                                                <span>
                                                                    <b-button pill variant="outline-danger" @click="remove(k)"
                                                                    v-show="k || (!k && form.additionalGuests.length > 1)">Remove</b-button>                                                                    
                                                                </span>
                                                            </b-col>
                                                        </b-row>
                                                        <b-row>
                                                            <b-col>
                                                                <b-button style="margin-top:10px;" pill variant="outline-success" @click="add(k)" v-show="k == form.additionalGuests.length - 1">Add
                                                                    Guest</b-button>
                                                            </b-col>
                                                        </b-row>
                                                    </b-form-group>
                                                </b-col>
                                            </b-row>

                                            <b-row>
                                                <b-col>
                                                    <b-form-group id="input-group-check" v-slot="{ ariaDescribedby }">
                                                        <b-form-checkbox-group v-model="form.brideOrGroom" id="checkboxes-2"
                                                            :aria-describedby="ariaDescribedby">
                                                            <b-form-checkbox value="bride">Knows bride</b-form-checkbox>
                                                            <b-form-checkbox value="groom">Knows groom</b-form-checkbox>
                                                        </b-form-checkbox-group>
                                                    </b-form-group>
                                                </b-col>
                                            </b-row>

                                            <b-button type="submit" variant="primary">Add Guest</b-button>
                                            <b-button type="reset" variant="danger">Reset</b-button>
                                        </b-form>
                                        <b-card class="mt-3" header="Form Data Result">
                                            <pre class="m-0">{{ form }}</pre>
                                        </b-card>
                                    </div>
                                </div>

                            </b-card>
                        </b-col>
                    </b-row>
                </b-container>
            </div>

            <BottomFooter />
        </div>
    </section>
</template>

<script>
import TopHeader from '../../components/nav/TopHeader.vue'
import BottomFooter from '../../components/nav/BottomFooter.vue'

export default {
    components: {
        TopHeader,
        BottomFooter,
    },
    data() {
        return {
            form: {
                user_id: this.$store.state.guestCount + 1,
                name: '',
                brideOrGroom: [], 
                additionalGuests: [{
                    name: ''
                }],
            },
            show: true, 
            showGuests: false,
            isLoading: false
        }
    },
    created() {
        this.loadGuestCount()
    },
    methods: {
        async loadGuestCount() {
            this.isLoading = true
            try {
                await this.$store.dispatch('loadGuests')
            } catch (error) {
                this.error = new Error(error.message || 'Failed to load guest count')
            }
            this.isLoading = false
        },
        showAddGuests() {
            this.showGuests = true
        },
        add() {
            this.form.additionalGuests.push({
                name: ''
            })
            console.log(this.form.additionalGuests);
        },
        remove(index) {
            this.form.additionalGuests.splice(index, 1)
            console.log(this.form.additionalGuests)
        },
        onSubmit(event) {
            // event.preventDefault()
            // alert(JSON.stringify(this.form))
            this.$store.dispatch('addGuests', this.form).then(() => {
                alert('Guest has been added to db.');
                // this.$router.push('/');
                this.clearForm();
            })
            console.log('SUCCESS! Guest was added');
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.name = ''
            this.form.brideOrGroom = []
            this.form.additionalGuests = [{
                name: ''
            }]
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }, 
        clearForm() {
            this.form.name = ""
            this.form.brideOrGroom = []
            this.form.additionalGuests = [{}]
            this.form.show = false
            this.$nextTick(() => {
                this.show = true
            })
            this.showGuests = false
        }
    }
}
</script>