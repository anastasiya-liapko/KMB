<template>
  <div class="enter">
    <div class="enter__content content">

      <transition name="slide-l1" appear>
        <div class="enter__logo transition-elem-1">
          <img src="../assets/img/logo.svg" alt="alef">
        </div>
      </transition>

      <transition name="slide-l2" appear>
        <h1 class="kmb-title enter__title transition-elem-2">Курс молодого бойца</h1>
      </transition>

      <transition name="slide-l3" appear>
        <div class="enter__form popup transition-elem-3">
          <p class="enter__form-title">Вход</p>
          <div class="enter__form-email">
            <input class="kmb-input enter__form-email-start" type="text">
            <span class="enter__form-email-end">@alef.im</span>
          </div>
          <input class="kmb-input enter__form-phone" type="text">
          <button class="kmb-button" @click="switchFlip">
            <span class="kmb-button__text">Войти</span>
            <span class="kmb-button__icon icon-arrow-right"></span>
          </button>
        </div>
      </transition>
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
@import '@/sass/_fonts.sass'

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

.enter__content
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

.enter__logo
  width: 224px
  height: 72px

.enter__title
  margin-top: 86px
  margin-bottom: 58px

.enter__form
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

.enter__form-title
  margin: 0
  font-family: inherit
  font-size: 34px
  font-weight: 700
  line-height: 1
  letter-spacing: -1.21px
  color: #000000

.enter__form-email
  display: flex
  flex-wrap: nowrap
  align-items: flex-end
  justify-content: flex-start

</style>
