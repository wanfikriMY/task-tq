<template>
  <div>
    <b-form @submit="onSubmit" class="w-100">
      <b-form-group
        id="input-group-1"
        label="Date"
        label-for="input-1"
        class="my-4"
      >
        <b-form-datepicker
          id="input-1"
          v-model="form.date"
          required
        ></b-form-datepicker>
      </b-form-group>

      <b-form-group>
        <div class="d-inline p-2">Item(s)</div>
        <div class="d-inline p-2">
          <ButtonToggle text="New Item" @btn-click="toggleAddItems" />
        </div>

        <!-- Start form add item -->

        <div v-if="showAddItems">
          <div class="container w-75 mb-5 pb-3">
            <AddItem />
          </div>
        </div>
        <!-- End form addItem -->

        <b-form-checkbox-group id="input-2" v-model="selected">
          <div v-for="(item, index) in inventories" :key="item.id">
            <div class="row my-3">
              <div class="col-xs-2 col-sm-2">
                <b-form-checkbox :value="item.item">
                  <span class="mx-3">
                    {{ item.item }}
                  </span>
                </b-form-checkbox>
              </div>
              <div class="col-xs-10 col-sm-10">
                <b-form-input
                  type="number"
                  id="`item-4"
                  v-model="qty[index]"
                  required
                ></b-form-input>
              </div>
            </div>
          </div>
        </b-form-checkbox-group>
      </b-form-group>
      <div>
        Selected: <strong>{{ selected }}</strong>
      </div>
      <div>
        qty: <strong>{{ qty }}</strong>
      </div>

      <b-button class="" type="submit" variant="success">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import ButtonToggle from "../ButtonToggle.vue";
import AddItem from "../Form/AddItem.vue";

export default {
  name: "ItemIn",
  props: {
    inventories: Array,
  },
  components: {
    ButtonToggle,
    AddItem,
  },
  data() {
    var selected1 = ["Milo", "Nescafe", "Telur"];
    var qty1 = [300, 25, 30];
    var item1 = [];

    selected1.forEach((s, q) => {
      var itemObj = {};
      itemObj.item = s;
      itemObj.qty = qty1[q];
      item1.push(itemObj);
    });

    console.log(item1);

    return {
      showAddItems: true,
      selected: [],
      qty: [],

      form: {
        date: "",
        items: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      // selected = this.selected;
      // qty = this.qty;
      // items = [];

      // selected.forEach((s, q) => {
      //   var itemObj = {};
      //   itemObj.item = s;
      //   itemObj.qty = qty[q];
      //   items.push(itemObj);
      // });

      // this.form = {
      //   date: this.date,
      //   items: this.items,
      // };

      alert(JSON.stringify(this.form));
    },
    toggleAddItems() {
      this.showAddItems = !this.showAddItems;
    },
  },
};
</script>

<style></style>
