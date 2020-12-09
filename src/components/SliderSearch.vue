<template>
  <div class="dv-slider p-10">
    <div class="container mx-auto">
      <div class="dv-slider__search flex items-center" >
        <div class="dv-slider__wrapper ">
          <h3 class="dv-slider__title text-7xl font-bold mb-20">
            Meraklı Gezginler<br/> İçin Oluşturuldu
          </h3>
          <form action="">
            <input type="search" class="placeholder-gray-500 p-4 rounded-xl w-full h-16" placeholder="Gidilecek Yer Ara">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderSearch"
}
</script>

<style lang="scss">
@import "../assets/scss/search";
</style>