<template>
  <div>
    <ItemIn :inventories="inventories" />
  </div>
</template>

<script>
import ItemIn from "../components/Form/ItemIn.vue";
export default {
  name: "In",
  components: {
    ItemIn,
  },
  props: {
    inventories: Array,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
