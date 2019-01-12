<template>
  <section class="container">
    <div>
      <h1 v-for="(user, index) in $toJS(users)" :key="index">{{ user.name }}</h1>
    </div>
  </section>
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
