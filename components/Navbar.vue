<template>
  <nav class="navbar is-dark">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item has-text-weight-bold">
          <i class="fas fa-code"/>
          <span class="icon-next">Asset Trackr</span>
        </nuxt-link>
        <span class="navbar-burger burger" data-target="navMenu">
          <span/>
          <span/>
          <span/>
        </span>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link to="/" class="navbar-item">
            <i class="fas fa-home"/>
            <span class="icon-next">Home</span>
          </nuxt-link>
          <nuxt-link to="/create-user" class="navbar-item">
            <i class="fas fa-blog"/>
            <span class="icon-next">Create User</span>
          </nuxt-link>
          <nuxt-link to="/create-asset" class="navbar-item">
            <i class="fas fa-blog"/>
            <span class="icon-next">Create Asset</span>
          </nuxt-link>
          <nuxt-link to="/transfer" class="navbar-item">
            <i class="fas fa-blog"/>
            <span class="icon-next">Transfer</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  mounted() {
    var burger = document.querySelector('.burger')
    var nav = document.querySelector('#' + burger.dataset.target)
    burger.addEventListener('click', function() {
      burger.classList.toggle('is-active')
      nav.classList.toggle('is-active')
    })
  }
}
</script>

<style scoped>
.icon-next {
  margin: 5px;
}
</style>
