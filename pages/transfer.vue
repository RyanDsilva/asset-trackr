<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Transfer Asset</h1>
          <h2 class="subtitle" v-html="responseText"/>
          <div class="field">
            <div class="control">
              <input
                id="nameInput"
                v-model="assetName"
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
                v-model="currentOwner"
                type="text"
                class="input"
                placeholder="Enter Owner's Name"
              >
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                id="nameInput"
                v-model="newOwner"
                type="text"
                class="input"
                placeholder="Enter New Owner's Name"
              >
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-success" @click="transfer">Transfer Asset</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import store from '@/store/store.js'

export default {
  name: 'TransferAsset',
  data() {
    return {
      assetName: '',
      meta: {
        price: ''
      },
      currentOwner: '',
      newOwner: ''
    }
  },
  fromMobx: {
    store
  },
  methods: {
    transfer() {
      store.transferTransaction(
        this.assetName,
        this.meta,
        this.currentOwner,
        this.newOwner
      )
    }
  }
}
</script>

<style scoped>
#nameInput {
  width: 40rem;
}
</style>
