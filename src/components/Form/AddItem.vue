<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="New Item:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.text"
          type="text"
          placeholder="Enter new item"
          required
        ></b-form-input>
      </b-form-group>

      <b-button class="float-end mt-2" type="submit" variant="primary">
        Submit
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "AddItem",
  data() {
    return {
      form: {
        text: "",
      },
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style></style>
