<template>
  <div class="slide-1">
    <div class="slide-1__wrapper">
      <div class="slide-1__content content">
        <button @click="switchFlip">Войти</button>
      </div>

      <transition name="slide-bl" appear>
        <div class="rect-gray"></div>
      </transition>

      <transition name="slide-br" appear>
        <div class="triangle triangle-bottom"></div>
      </transition>
    </div>
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

.slide-1__wrapper
  position: relative
  width: inherit
  height: inherit
</style>
