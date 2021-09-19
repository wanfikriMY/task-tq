<template>
  <b-table striped hover :items="items"></b-table>
</template>

<script>
export default {
  name: "Table",
  props: ["items"],
  data() {
    return {};
  },
};
</script>

<style>
</style>