<template>
  <section class="relative">
    <div class="banner"></div>
    <div
      class="absolute w-full text-center left-[50%] top-[54%] translate-x-[-50%] translate-y-[-50%]"
    >
      <h1 class="text-[40px] font-bold text-white">
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
  </section>
</template>

<style scoped>
.banner {
  height: 45vh;
  background: url('@/assets/img/1920x650.png');
  background-size: 284% 250%;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(70%);
}

@media only screen and (min-width: 1200px) {
  .banner {
    background-size: 200% 250%;
  }
}

@media only screen and (max-width: 767px) {
  .banner {
    background-size: cover;
  }
}
</style>
