<template>
  <b-navbar toggleable="md" type="dark" variant="success">
    <b-navbar-brand href="/home" class="mx-4">Inventory Tracker</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/view">View Inventory</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Management" right>
          <b-dropdown-item href="/in">Goods In</b-dropdown-item>
          <b-dropdown-item href="/out">Goods Out</b-dropdown-item>
          <b-dropdown-item href="/history">Transaction History</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>