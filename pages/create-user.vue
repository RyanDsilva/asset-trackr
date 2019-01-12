<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Create User</h1>
          <h2 class="subtitle" v-html="responseText"/>
          <div class="field">
            <div class="control">
              <input
                id="nameInput"
                v-model="name"
                type="text"
                class="input"
                placeholder="Enter Name"
              >
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-success" @click="createUser">Create</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <br>
      <table class="table is-fullwidth is-hoverable">
        <thead>
          <th>Name</th>
          <th>Public Key</th>
          <th>Private Key</th>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.publicKey }}</td>
            <td>{{ user.privateKey }}</td>
          </tr>
        </tbody>
      </table>
      <br>
    </section>
  </div>
</template>

<script>
import store from '@/store/store.js'

export default {
  name: 'CreateUser',
  data() {
    return {
      name: ''
    }
  },
  fromMobx: {
    store
  },
  methods: {
    createUser() {
      store.addUser(this.name)
    }
  }
}
</script>

<style scoped>
#nameInput {
  width: 40rem;
}
</style>
