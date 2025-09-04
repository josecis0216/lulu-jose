<template>
    <section>
        <div>
            <TopHeader />
            <div class="sectionBody">
                <b-container>
                    <b-row>
                        <b-col>
                            <b-card>
                                <div class="form-container">
                                    <h2>Please Enter Your Address: </h2>
                                    <div>
                                        <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
                                            <b-row>
                                                <b-col>
                                                    <b-form-group id="input-group-2" label="Your Name:"
                                                        label-for="input-2">
                                                        <b-form-input id="input-2" v-model="form.name"
                                                            placeholder="Enter name" required></b-form-input>
                                                    </b-form-group>
                                                </b-col>
                                            </b-row>

                                            <b-row>
                                                <b-col>
                                                    <b-form-group id="input-group-1" label="Street Address:"
                                                        label-for="input-1">
                                                        <b-form-input id="input-1" v-model="form.address"
                                                            placeholder="Enter street address" required></b-form-input>
                                                    </b-form-group>
                                                </b-col>
                                            </b-row>

                                            <b-row>
                                                <b-col>
                                                    <b-form-group id="input-group-5" label="Address 2"
                                                        label-for="inputo-5">
                                                        <b-form-input id="input-5" v-model="form.address2"
                                                            placeholder="Address 2"></b-form-input>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col>
                                                    <b-form-group id="input-group-6" label="City" label-for="input-6">
                                                        <b-form-input id="input-6" v-model="form.city"
                                                            placeholder="City"></b-form-input>
                                                    </b-form-group>
                                                </b-col>
                                            </b-row>

                                            <b-row>
                                                <b-col>
                                                     <b-form-group id="input-group-3" label="State" label-for="input-3">
                                                        <b-form-select id="input-3" v-model="form.state" :options="states"
                                                            required></b-form-select>
                                                    </b-form-group>
                                                </b-col>
                                                <b-col>
                                                     <b-form-group id="input-group-7" label="Zip" label-for="input-7">
                                                        <b-form-input id="input-7" v-model="form.zip" placeholder="Zip code"
                                                            required></b-form-input>
                                                    </b-form-group>
                                                </b-col>
                                            </b-row>

                                            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                                                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4"
                                                    :aria-describedby="ariaDescribedby">
                                                    <b-form-checkbox value="me">Check me out</b-form-checkbox>
                                                    <b-form-checkbox value="that">Check that out</b-form-checkbox>
                                                </b-form-checkbox-group>
                                            </b-form-group>

                                            <b-button type="submit" variant="primary">Submit</b-button>
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
                name: '',
                address: '',
                address2: '',
                city: '',
                state: null,
                zip: '',
                checked: []
            },
            states: [{ text: 'Select One', value: null }, 'Alabama',
                'Alaska',
                'Arizona',
                'Arkansas',
                'California',
                'Colorado',
                'Connecticut',
                'Delaware',
                'Florida',
                'Georgia',
                'Hawaii',
                'Idaho',
                'Illinois',
                'Indiana',
                'Iowa',
                'Kansas',
                'Kentucky',
                'Louisiana',
                'Maine',
                'Maryland',
                'Massachusetts',
                'Michigan',
                'Minnesota',
                'Mississippi',
                'Missouri',
                'Montana',
                'Nebraska',
                'Nevada',
                'New Hampshire',
                'New Jersey',
                'New Mexico',
                'New York',
                'North Carolina',
                'North Dakota',
                'Ohio',
                'Oklahoma',
                'Oregon',
                'Pennsylvania',
                'Rhode Island',
                'South Carolina',
                'South Dakota',
                'Tennessee',
                'Texas',
                'Utah',
                'Vermont',
                'Virginia',
                'Washington',
                'West Virginia',
                'Wisconsin',
                'Wyoming'],
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            // event.preventDefault()
            // alert(JSON.stringify(this.form))
            this.$store.dispatch('saveAddress', this.form).then(() => {
                alert('Thank you, your address has been saved.');
                this.$router.push('/');
            })
            console.log('SUCCESS! Address was added');
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.name = ''
            this.form.address = ''
            this.form.address2 = ''
            this.form.city = ''
            this.form.state = null
            this.form.zip = ''
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>