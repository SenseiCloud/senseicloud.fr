<template>
  <div id="app">
    <Nav class="mb-6" />
    <IndexBody />
  </div>
</template>

<script>
import IndexBody from './components/IndexBody.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    IndexBody,
    Nav
  }
}
</script>