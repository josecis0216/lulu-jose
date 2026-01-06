<template>
  <li>
    <b-container>
      <b-row>
        <b-col cols="12" lg="6">
          <div>
            <h2>{{ name }}</h2>
            <p>Guest of the {{ brideOrGroom[0] }}</p>
          </div>
          <p>Bringing these guests with them:</p>
          <div v-for="guest in guests" :key="guest.name">
            <p>{{ guest.name }}</p>
            <p v-if="guest.child">{{ guest.needsOwnChair ? 'Needs own chair' : 'Doesn\'t need own chair' }}</p>
          </div>
          <p v-if="hasChildren">Has children</p>
          <!-- <p v-for="guest in guests" :key="guest.name">
                {{ guest.name }}
                </p> -->
        </b-col>
      </b-row>
    </b-container>
  </li>
</template>

<script>
export default {
  props: {
    name: {
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
        return [{ name: '', child: false, needsOwnChair: true }]
      }
    },
    hasChildren: {
      type: Boolean,
      default: false
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
</style>
