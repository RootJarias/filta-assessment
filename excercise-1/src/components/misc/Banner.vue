<template>
  <section class="relative">
    <div class="banner"></div>
    <div
      class="absolute w-full text-center left-[50%] top-[53%] translate-x-[-50%] translate-y-[-50%]"
    >
      <h1 class="text-[46px] font-bold text-white">
        Hello
        <br class="hidden sm:block" />
        Developer!
      </h1>
      <h2 class="mt-3 text-3xl text-white">
        Lorem ipsum dolor sit amet,
        <br class="hidden sm:block" />
        consectetur adipiscing elit
      </h2>
    </div>
    <p
      class="absolute right-[10px] bottom-[4px] text-[10px] font-medium text-gray-500"
    >
      Powered by HTML.COM
    </p>
  </section>
</template>

<style scoped>
.banner {
  height: 55vh;
  background: url('@/assets/img/1920x650.png');
  background-size: 284% 250%;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(70%);
  image-rendering: -webkit-optimize-contrast;
}

@media only screen and (min-width: 1200px) {
  .banner {
    background-size: 170% 220%;
  }
}

@media only screen and (max-width: 767px) {
  .banner {
    background-size: cover;
  }
}
</style>
