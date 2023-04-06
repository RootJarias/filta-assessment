import { defineStore, acceptHMRUpdate } from 'pinia';

export const useSectionStore = defineStore('sections', {
  state: () => ({
    id: 0,
    title: 'Section 1',
    content:
      '<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>',
  }),

  getters: {},

  actions: {
    setSectionData(id, section) {
      this.$patch({
        id: id,
        title: section.title,
        content: section.content,
      });
    },
  },
});

// HMR (Hot Module Replacement) :: Make sure to pass the right store definition.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSectionStore, import.meta.hot));
}
