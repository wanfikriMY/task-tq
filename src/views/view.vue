<template>
  <div>
    <h3>view</h3>
    <Table :items="inventories" />
  </div>
</template>

<script>
import Table from "../components/Table.vue";
export default {
  name: "View",
  components: {
    Table,
  },
  props: {
    inventories: Array,
    trans_in: Array,
    trans_out: Array,
  },
  data() {
    const items = [
      { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
      { age: 21, first_name: "Larsen", last_name: "Shaw" },
      { age: 89, first_name: "Geneva", last_name: "Wilson" },
      { age: 38, first_name: "Jami", last_name: "Carney" },
    ];
    return {
      items,
    };
  },
};
</script>

<style>
</style>