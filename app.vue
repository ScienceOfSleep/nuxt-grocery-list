<script lang="ts">
export default defineComponent({
  data() {
    return {
      items: null as Item[] | null
    };
  },
  async created() {
    try {
      const response = await fetch('/api/items');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      this.items = await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
});
</script>

<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <p>Name: {{ item.itemName }}</p>
      <p>Checked: {{ item.isChecked }}</p>
    </div>
  </div>
</template>
