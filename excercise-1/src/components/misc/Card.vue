<template>
  <div
    class="card w-full rounded-[6px] border-[1px] border-[#eee] md:w-[90%] md:m-auto md:mt-[40px]"
  >
    <div class="p-[22px]">
      <figure class="relative rounded-[6px] bg-[#cccccc]">
        <img
          :src="require(`@/assets/img/${cardData.image}`)"
          :alt="cardData.image"
        />
        <p
          class="absolute right-[10px] bottom-[4px] text-[10px] font-medium text-gray-400"
        >
          {{ cardData.author }}
        </p>
      </figure>
    </div>
    <div class="card-body pt-0">
      <p class="mt-4 font-medium text-center">{{ cardData.description }}</p>
      <div class="card-actions justify-center mt-4">
        <button
          class="btn min-h-[0] h-[40px] pr-5 pl-5 bg-transparent text-black border-[3px] rounded-full uppercase font-bold hover:text-white"
        >
          Read More
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Base Imports
import { defineProps } from 'vue';

// Set Props
const cardData = defineProps({
  image: String,
  author: String,
  description: String,
});
</script>
