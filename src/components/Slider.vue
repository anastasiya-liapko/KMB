<template>
  <div class="slider">
    <button @click="switchFlip">Войти</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'slider',
  methods: {
    ...mapActions([
      'switchFlip'
    ])
  }
}
</script>

<style lang="sass">
.slider
  width: 100vw
  height: 100vh
  background-color: red
  button
    width: 200px
    height: 50px
    color: white
    background-color: blue
</style>
