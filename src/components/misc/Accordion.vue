<template>
  <div
    :class="
      i === sectionStore.id
        ? 'collapse collapse-arrow border border-base-300 bg-base-100 rounded collapse-open'
        : 'collapse collapse-arrow border border-base-300 bg-base-100 rounded'
    "
    tabindex="0"
    v-for="(el, i) in sectionData"
    :key="i"
    v-on:click="setDefaultSection($event, i, el)"
  >
    <div
      :class="
        i === sectionStore.id
          ? 'collapse-title text-xl font-medium bg-[#570df8] text-white'
          : 'collapse-title text-xl font-medium'
      "
      style="cursor: pointer !important"
    >
      {{ el.title }}
    </div>
    <div class="collapse-content">
      <div class="p-3" v-html="el.content"></div>
      <div class="mt-3 w-100 flex justify-end">
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
const setDefaultSection = (e, sectionID, section) => {
  sectionStore.setSectionData(sectionID, section);

  let currentElement = e.target.parentElement;
  if (currentElement.classList.contains('collapse-open')) {
    currentElement.classList.remove('collapse-open');
    currentElement.classList.add('collapse-close');
  } else {
    currentElement.classList.remove('collapse-close');
    currentElement.classList.add('collapse-open');
  }
};
</script>
