<template>
  <b-button class="float-end" @click="onClick()" variant="primary">
    {{ text }}
  </b-button>
</template>

<script>
export default {
  name: "ButtonToggle",
  props: {
    text: {
      type: String,
    },
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>

<style></style>
