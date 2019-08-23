<template>
  <div class="enter">
    <div class="enter__content content">

      <transition name="slide-l1" appear>
        <div class="enter__logo transition-elem-1">
          <img src="" alt="alef">
        </div>
      </transition>

      <transition name="slide-l2" appear>
        <p class="enter__title transition-elem-2">Курс молодого бойца</p>
      </transition>

      <transition name="slide-l3" appear>
        <form class="enter__form popup transition-elem-3">

        </form>
      </transition>

      <button @click="switchFlip">Войти</button>
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
  name: 'enter',
  methods: {
    ...mapActions([
      'switchFlip'
      // 'changeMode'
    ])
  }
}
</script>

<style lang="sass">
.enter
  position: relative
  width: 100vw
  height: 100vh
  background-color: #ffffff
  button
    width: 200px
    height: 50px
    color: white
    background-color: blue
    font-family: inherit
</style>
