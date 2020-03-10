<template>
  <div id="app">
    <c-navbar />
    <main class="grid">
      <nuxt />
    </main>
    <c-footer />
  </div>
</template>

<script>
export default {
  mounted () {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
</script>

<style>
</style>
