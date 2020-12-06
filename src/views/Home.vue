<template>
  <div class="home">
    <Navigation></Navigation>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation";

export default {
  name: "Home",
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
  @import "../assets/scss/home";
</style>
