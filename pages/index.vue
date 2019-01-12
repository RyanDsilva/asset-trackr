<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Connect to BigChainDB</h1>
          <h2 class="subtitle">{{ responseText }}</h2>
          <button class="button is-success" @click="setConnection">Connect</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import store from '@/store/store.js'

export default {
  name: 'Home',
  fromMobx: {
    store
  }
}
</script>

<style scoped>
</style>
