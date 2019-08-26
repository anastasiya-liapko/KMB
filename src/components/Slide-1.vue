<template>
  <div class="slide-1">
    <div class="content slide-1__content">
      <div class="slide-1__content content">
        <button @click="switchFlip">Войти</button>
      </div>
    </div>

    <transition name="slide-bl" appear>
      <div class="rect-gray"></div>
    </transition>

    <transition name="slide-br" appear>
      <div class="triangle triangle-bottom"></div>
    </transition>
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
  // position: relative
  // width: 100vw
  // height: 100vh
  // background-color: #ffffff
  button
    width: 200px
    height: 50px
    color: white
    background-color: blue
</style>
