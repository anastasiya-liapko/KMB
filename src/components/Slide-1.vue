<template>
  <div class="slide-1">
    <button @click="switchFlip">Войти</button>
    <div class="triangle triangle-bottom"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'slide-1',
  methods: {
    ...mapActions([
      'switchFlip'
      // 'changeMode'
    ])
  }
}
</script>

<style lang="sass">
.slide-1
  position: relative
  width: 100vw
  height: 100vh
  background-color: pink
  button
    width: 200px
    height: 50px
    color: white
    background-color: blue
</style>
