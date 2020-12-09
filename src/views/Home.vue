<template>
  <div class="home">
    <Navigation></Navigation>
    <SliderSearch></SliderSearch>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation";
import SliderSearch from "@/components/SliderSearch";

export default {
  name: "Home",
  components: {
    Navigation,
    // eslint-disable-next-line vue/no-unused-components
    SliderSearch
  }
};
</script>

<style lang="scss">
@import "../assets/scss/home";
</style>
