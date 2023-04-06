<template>
  <CMP_Banner />

  <div class="container mx-auto mt-5 px-10 pb-[100px] md:px-0">
    <div
      class="card bg-gray-100 w-100 shadow-lg rounded-[6px] border-[1px] border-[#eee]"
    >
      <div class="card-body">
        <div class="block sm:hidden">
          <CMP_Tabs />
        </div>
        <div class="hidden sm:block">
          <CMP_Accordion />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import Components
import CMP_Banner from '../components/misc/Banner.vue';
import CMP_Tabs from '../components/misc/Tabs.vue';
import CMP_Accordion from '../components/misc/Accordion.vue';
</script>
