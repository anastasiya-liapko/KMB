<template>
  <div class="enter">
    <button @click="switchFlip">Войти</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'enter',
  methods: {
    ...mapActions([
      'switchFlip'
    ])
  }
}
</script>

<style lang="sass">
.enter
  width: 100vw
  height: 100vh
  background-color: green
  button
    width: 200px
    height: 50px
    color: white
    background-color: blue
</style>
