<template>
  <div class="dv-slider p-10">
    <div class="container mx-auto">
      <div class="dv-slider__search flex items-center" >
        <div class="dv-slider__wrapper w-1/2 ">
          <h3 class="dv-slider__title text-4xl sm:text-7xl font-bold mb-20">
            Meraklı Gezginler<br/> İçin Oluşturuldu
          </h3>
          <form action="" class="flex">
            <input type="search" class="placeholder-gray-500 p-8 rounded-full w-full h-16" placeholder="Gidilecek Yer Ara">
            <button class="-ml-16 rounded-full bg-red-500 p-4 text-gray-50 ">Ara</button>
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

<style lang="scss" scoped>
  @import "../assets/scss/search";
</style>