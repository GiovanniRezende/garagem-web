<script setup>
import HomeScreen from './components/HomeScreen.vue'
</script>

<template>
  <header>

  </header>

  <main>
    <HomeScreen/>
  </main>
</template>

<style scoped>

@media (min-width: 1024px) {

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
