<template>
  <section class="relative">
    <div
      class="banner h-[55vh] bg-[url('@/assets/img/1920x650.png')] bg-[length:284%_250%] bg-center bg-no-repeat brightness-[70%]"
    ></div>
    <div
      class="absolute w-full text-center left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2"
    >
      <h1 class="mb-4 text-[46px] font-bold text-white">
        Hello
        <br class="hidden sm:block" />
        Developer!
      </h1>
      <h2 class="text-3xl text-white">
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
