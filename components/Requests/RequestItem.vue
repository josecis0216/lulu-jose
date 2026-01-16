<template>
  <li>
    <div>
      <h2>{{ fullName }}</h2>
      <p>Guest of the {{ brideOrGroom.toString() }}</p>
    </div>
    <p>Bringing these guests with them:</p>
    <div v-for="guest in guests" :key="guest.name">
      <p class="inline-elements">
        {{ guest.name }}
      </p>
      <p v-show="guest.child && guest.needsOwnChair" class="inline-elements">
        needs their own chair
      </p>
      <p v-show="guest.child && !guest.needsOwnChair" class="inline-elements">
        doesn't need chair
      </p>
    </div>
    <p>
      RSVP Date:
    </p>
    <p>
      {{ new Intl.DateTimeFormat('en-US').format(rsvp_date) }}
    </p>
    <p class="inline-items">
      Response:
      <strong> {{ attending }} </strong>
    </p>
  </li>
</template>

<script>
export default {
  props: {
    fullName: {
      type: String,
      default: ''
    },
    brideOrGroom: {
      type: Array,
      default() {
        return []
      }
    },
    guests: {
      type: Array,
      default() {
        return [{ name: '' }]
      }
    },
    rsvpDate: {
      type: Date,
      default: ''
    },
    attending: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
  list-style-type: none;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}

.inline-elements {
  display: inline-block;
  /* Makes both elements sit side-by-side */
  margin-right: 10px;
  /* Optional: adds spacing between them */
}
</style>
