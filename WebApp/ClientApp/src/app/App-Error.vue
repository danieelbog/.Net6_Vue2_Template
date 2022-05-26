<template>
  <div>
    <div class="message">
      <h2>An error occured during Application initialization</h2>
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    error: Error,
  },
  mounted() {
    var preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";

    var appContainer = document.getElementById("app-container");
    if (appContainer) appContainer.style.display = "block";
  },
});
</script>

<style>
body {
  font-family: sans-serif;
}
</style>
