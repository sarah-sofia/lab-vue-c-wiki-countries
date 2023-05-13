<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/Navbar.vue";
</script>

<template>
  <div className="app">
    <NavBar />
    <div className="container">
      <router-view />
    </div>
  </div>
</template>


