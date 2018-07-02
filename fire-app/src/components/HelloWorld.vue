<template>
  <div>
    <form @submit="addLocation(name, image)">
      <input v-model="name" placeholder="Location Name">
      <input v-model="image" placeholder="Location Image URL">
      <button type="submit">Add New Location</button>
    </form>
    <article v-for="(location, idx) in locations" :key="idx">
      <div class="photo-div">
        <img :src="location.image">
        <h1>{{ location.name }}</h1>
        <button @click="deleteLocation(location.id)">Delete</button>
      </div>
    </article>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  name: 'HelloWorld',
  data () {
    return {
      locations: [],
      name: '',
      image: ''
    }
  },
  firestore () {
    return {
      locations: db.collection('locations').orderBy('createdAt')
    }
  },
  methods: {
    addLocation (name, image) {
      const createdAt = new Date()
      db.collection('locations').add({name, image, createdAt})
    },
    deleteLocation (id) {
      db.collection('locations').doc(id).delete()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin: 0;
  float: left;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.photo-div {
  width: 50%;
  text-align: center;
  margin: 0 auto 50px auto;
}

.photo-div button {
  float: right;
  margin-top: 5px;
}

img {
  width: 100%;
}
</style>
