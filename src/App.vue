<template>
  <div>
    <Navbar />
    <div class="main-content container w-75">
      <router-view
        :inventories="inventories"
        :trans_in="trans_in"
        :trans_out="trans_out"
      ></router-view>
    </div>
  </div>
</template>

<script>
//Components
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar,
  },
  data() {
    return {
      inventories: [],
      trans_in: [],
      trans_out: [],
    };
  },

  created() {
    this.inventories = [
      {
        id: 1,
        item: "Milo",
        qty: 34,
      },
      // {
      //   id: 2,
      //   item: "Biscuit Cracker",
      //   qty: 105,
      // },
      // {
      //   id: 3,
      //   item: "Sardin",
      //   qty: 340,
      // },
      // {
      //   id: 4,
      //   item: "Bihun",
      //   qty: 46,
      //   desc: "",
      // },
    ];
    this.trans_in = [
      {
        id: 1,
        date: "2021-09-15",
        items: [
          {
            item: "Milo",
            qty: 100,
          },
          {
            item: "Biscuit Cracker",
            qty: 500,
          },
        ],
      },
      {
        id: 2,
        date: "2021-09-18",
        items: [
          {
            item: "Milo",
            qty: 100,
          },
          {
            item: "Sardin",
            qty: 40,
          },
        ],
      },
    ];
    this.trans_out = [
      {
        id: 1,
        date: "2021-09-15",
        name: "Wan Fikri",
        items: [
          {
            item: "Milo",
            qty: 2,
          },
          {
            item: "Sardin",
            qty: 3,
          },
        ],
        Status: [
          {
            date: "2020-09-15",
            status: "Donation dispatch out",
          },
          {
            date: "2020-09-16",
            status: "Donation completed",
          },
        ],
      },
    ];
  },
};
</script>
