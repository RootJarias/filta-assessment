<template>
  <div class="card bg-gray-100 w-100 border-2 border-[#570df8]">
    <div class="card-body">
      <div class="tabs tabs-boxed">
        <a
          :class="i === sectionStore.id ? 'tab tab-active' : 'tab'"
          v-for="(el, i) in sectionData"
          :key="i"
          v-on:click="setDefaultSection(i, el)"
        >
          {{ el.title }}
        </a>
      </div>
      <div
        class="pt-3 pb-3 h-[15vh]"
        v-html="sectionStore.content"
        v-auto-animate
      ></div>
      <div class="card-actions justify-end mt-5">
        <button
          class="btn bg-[#570df8] border-[#570df8] hover:border-[#0000c3] hover:bg-[#0000c3] uppercase"
        >
          Read More
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Base Imports
import { ref } from 'vue';

// Import Data
import rawSectionData from '../../assets/files/data.json';

// Import Stores
import { useSectionStore } from '../../stores/module/sections';

// Set Datas
const sectionData = ref(rawSectionData);

const sectionStore = useSectionStore();

// Set Functions
const setDefaultSection = (sectionID, section) => {
  sectionStore.setSectionData(sectionID, section);
};
</script>
