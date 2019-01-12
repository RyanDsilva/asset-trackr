<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Create Asset</h1>
          <h2 class="subtitle" v-html="responseText"/>
          <div class="field">
            <div class="control">
              <input
                id="nameInput"
                v-model="asset.name"
                type="text"
                class="input"
                placeholder="Enter Asset Name"
              >
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                id="nameInput"
                v-model="meta.price"
                type="text"
                class="input"
                placeholder="Enter Price"
              >
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                id="nameInput"
                v-model="uname"
                type="text"
                class="input"
                placeholder="Enter Owner's Name"
              >
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-success" @click="createTransaction">Create Asset</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <br>
      <table class="table is-fullwidth is-hoverable">
        <thead>
          <th>Asset Name</th>
          <th>Price</th>
          <th>Owner's Public Key</th>
        </thead>
        <tbody>
          <tr v-for="(tx, index) in transactions" :key="index">
            <td>{{ tx.asset.data.name }}</td>
            <td>{{ tx.metadata.price }}</td>
            <td>{{ tx.outputs[0].public_keys[0] }}</td>
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
  name: 'CreateAsset',
  data() {
    return {
      asset: {
        name: ''
      },
      meta: {
        price: ''
      },
      uname: ''
    }
  },
  fromMobx: {
    store
  },
  methods: {
    createTransaction() {
      store.addTransaction(this.asset, this.meta, this.uname)
    }
  }
}
</script>

<style scoped>
#nameInput {
  width: 40rem;
}
</style>
