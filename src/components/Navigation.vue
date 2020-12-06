<template>
  <header>
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="../assets/img/logotravel.png" alt="">
      </div>
      <div class="collapse">
        <ul class="navbar-nav">
          <li class="navbar-nav__item">
            <router-link to="/" class="navbar-nav__link">Gidilecek Yerler</router-link>
          </li>
          <li class="navbar-nav__item">
            <router-link to="/about" class="navbar-nav__link">Blog</router-link>
          </li>
        </ul>
        <div class="userbar">
          <a href="" class="btn btn-dark">Üye Ol</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/navigation";
</style>