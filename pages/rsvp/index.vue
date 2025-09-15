<template>
  <section>
    <TopHeader />
    <div class="sectionBody">
      <b-container>
        <b-row>
          <b-col>
            <b-card style="max-width: 25rem; margin: 200px auto 0px auto;">
              <b-form v-if="show" @submit.prevent="onSubmit" @reset="onReset">
                <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
                  <b-form-input id="input-1" v-model="form.fullName" placeholder="Enter name" required></b-form-input>
                </b-form-group>

                <!-- <b-button pill variant="outline-success" @click="showAddGuests" v-show="!showGuests">Add
                  Guest</b-button> -->

                  <b-form-group v-for="(guest, k) in form.additional_guests" :key="k" v-show="hasGuests" label="Guest in your party:" class="additional-guest-container">
                    <b-form-input type="text" class="form-control" placeholder="Guest Name"
                      v-model="guest.name"></b-form-input>
                    <span>
                      <b-button pill variant="outline-danger" @click="remove(k)"
                        v-show="k || (!k && form.additional_guests.length > 1)">Remove</b-button>                      
                    </span>
                  </b-form-group>
                  <b-form-group>
                    <b-button  pill variant="outline-success" @click="add(k)" v-show="addGuest">Add
                        Guest</b-button>
                  </b-form-group>

                <!-- <b-form-group v-for="(guest, k) in form.guests" :key="k" v-show="showGuests && this.$store.getters.hasGuests">
                  <b-form-input type="text" class="form-control" placeholder="Guest Name"
                    v-model="guest.name"></b-form-input>
                  <span>
                    <b-button pill variant="outline-danger" @click="remove(k)"
                      v-show="k || (!k && form.guests.length > 1)">Remove</b-button>
                    <b-button pill variant="outline-success" @click="add(k)" v-show="k == form.guests.length - 1">Add
                      Guest</b-button>
                  </span>
                </b-form-group> -->


                <b-form-group id="input-group-check" v-slot="{ ariaDescribedby }">
                  <b-form-checkbox-group v-model="form.brideOrGroom" id="checkboxes-2"
                    :aria-describedby="ariaDescribedby">
                    <b-form-checkbox value="bride">I know the bride</b-form-checkbox>
                    <b-form-checkbox value="groom">I know the groom</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <bottom-footer />

    <!-- <div>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div> -->
  </section>
</template>

<script>
import TopHeader from '@/components/nav/TopHeader.vue'
import BottomFooter from '@/components/nav/BottomFooter.vue'

export default {
  components: {
    TopHeader,
    BottomFooter
  },
  mounted() {
    const id = this.$route.query.id;
    const name = this.$route.query.name;
    this.fullName = name; 
    this.id = id;
  },
  data() {
    return {
      form: {
        user_id: null, 
        fullName: '',
        brideOrGroom: [],
        additional_guests: [{
          name: ''
        }],
      },
      show: true,
      showGuests: false,
      addGuest: false,
    }    
  },
  computed: {
    loadedGuests() {
      return this.$store.getters.guests
    },
    hasGuests() {
      return this.$store.getters.hasGuests
    }
  },
  created() {
    this.loadGuests()
  },
  methods: {
    async loadGuests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('loadGuests');
      } catch (error) {
        this.error = new Error(error.message || 'Failed to get guests');
      }
      this.getGuest();
      this.isLoading = false;
    },

    getGuest() {
      this.form.user_id = parseInt(this.$route.query.id);
      this.addGuest = this.$route.query.addGuest;

      this.loadedGuests.forEach(guest => {
        if (this.form.user_id === guest.user_id) {
          this.form.fullName = guest.name;
          this.form.additional_guests = [...guest.additionalGuests];
        }
      });      
    },

    showAddGuests() {
      this.showGuests = true
    },

    add() {
      this.form.guests.push({
        name: ''
      })
      console.log(this.form.guests)
    },

    remove(index) {
      this.form.guests.splice(index, 1)
      console.log(this.form.guests)
    },

    onSubmit(event) {
      // if (this.form.checkedUnderstand === 'accepted') {
        this.$store.dispatch('rsvp', this.form).then(() => {
          alert('Thank you for responding, can\'t wait to celebrate with you!')
          this.$router.push('/')
        })
        console.log('SUCCESS! Form was submitted')
      // } else {
       // alert(JSON.stringify('Must agree that no children are allowed at reception as this is an adult only event. Thank you.'))
      // }
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.fullName = ''
      this.form.checked = '0'
      this.form.brideOrGroom = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style scoped>
.sectionBody {
  /* background-image: url('https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=960&h=450&dpr=2'); */
  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('~/static/wedding-photo-rsvp.jpeg');
  /* background-image: url('~/static/wedding-photo-rsvp.jpeg');*/
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 860px;
}

.additional-guest-container {
  padding-left: 25px;
}

@media only screen and (max-width: 768px) {
  .sectionBody {
    /* background-position-y: 1rem;
    background-position-x: -30rem; */
    width: 100%;
  }
}
</style>
