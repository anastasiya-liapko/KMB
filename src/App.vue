<template>
  <div id="app">
    <transition name="fade-in" mode="out-in" appear>
      <router-view :key="$route.fullPath" class="page"/>
    </transition>
  </div>
</template>

<style lang="sass">
body
  margin: 0
  font-family: 'Exo 2', sans-serif

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983

.fade-in-enter,
.fade-in-enter-active
  animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both

// .fade-in-leave,
// .fade-in-leave-active
//   animation-name: fadeOutLeft
//   animation-duration: 0.3s

// @keyframes fade-in
//   0%
//     opacity: 0
//   100%
//     opacity: 1

.content
  z-index: 10
  position: relative
  width: inherit
  height: inherit
  background-color: transparent

.kmb-title
  margin: 0
  font-family: inherit
  font-size: 64px
  font-weight: 700
  line-height: 1
  letter-spacing: -2.29px
  color: #000000

.kmb-input
  width: 100%
  height: 63px
  border: none
  border-bottom: 2px solid #d2d2d2

.kmb-button
  display: flex
  flex-wrap: nowrap
  align-items: center
  justify-content: center
  width: 193px
  height: 50px
  border: none
  border-radius: 40px
  background-image: linear-gradient(207deg, #6caac4, #3a7191)

.kmb-button__text
  font-family: inherit
  font-size: 14px
  font-weight: 400
  line-height: 1
  color: #ffffff

.triangle
  z-index: 100
  position: absolute
  right: 0
  width: 250px
  height: 250px
  background-size: cover
  background-position: center
  background-repeat: no-repeat

.triangle-bottom
  bottom: 0
  background-image: url('assets/img/triangle-right-bottom.png')

.triangle-top
  top: 0
  background-image: url('assets/img/triangle-right-top.png')

.rect-gray
  z-index: 1
  position: absolute
  left: 0
  top: 0
  width: 70%
  height: 100%
  background-size: cover
  background-position: top
  background-repeat: no-repeat
  background-image: url('assets/img/rect-gray.svg')

.triangle-gray
  z-index: 1
  position: absolute
  left: 0
  top: 0
  width: 65%
  height: 100%
  background-size: contain
  background-position: top
  background-repeat: no-repeat
  background-image: url('assets/img/triangle-gray.svg')

.rect-green
  z-index: 1
  position: absolute
  // left: 53px
  bottom: 0
  width: 309px
  height: 410px
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  background-image: url('assets/img/rect-green.svg')
  border: 1px solid red

// modal
.modal-mask
  position: fixed
  z-index: 9998
  top: 0
  left: 0
  width: 100%
  height: 100vh
  background-color: rgba(215, 215, 215, 0.76)
  display: table
  transition: opacity .3s ease
.modal-wrapper
  display: table-cell
  vertical-align: middle
.popup,
.modal-container
  // width: 493px
  // height: 447px
  width: 34.236vw
  height: 31.042vw
  margin: 0px auto
  padding: 20px 30px
  background-color: #fff
  box-shadow: 0 16px 35px 0 rgba(0, 0, 0, 0.08)
  transition: all .3s ease
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-enter
  opacity: 0
.modal-leave-active
  opacity: 0
.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform: scale(1.1)
  transform: scale(1.1)

.modal-enter,
.modal-enter-active
  // animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both

.modal-leave,
.modal-leave-active
  // animation: fade-out 1s ease-out both

@keyframes fade-in
  0%
    opacity: 0
  100%
    opacity: 1
@keyframes fade-out
  0%
    opacity: 1
  100%
    opacity: 0

.slide-bl-enter,
.slide-bl-enter-active
  animation: slide-in-bl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

.slide-bl-leave,
.slide-bl-leave-active
  animation: slide-out-bl 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

@keyframes slide-in-bl
  0%
    transform: translateY(1000px) translateX(-1000px)
    opacity: 0
  100%
    transform: translateY(0) translateX(0)
    opacity: 1
@keyframes slide-out-bl
  0%
    transform: translateY(0) translateX(0)
    opacity: 1
  100%
    transform: translateY(1000px) translateX(-1000px)
    opacity: 0

.slide-br-enter,
.slide-br-enter-active
  animation: slide-in-br 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

.slide-br-leave,
.slide-br-leave-active
  animation: slide-out-br 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

@keyframes slide-in-br
  0%
    transform: translateY(1000px) translateX(1000px)
    opacity: 0
  100%
    transform: translateY(0) translateX(0)
    opacity: 1
@keyframes slide-out-br
  0%
    transform: translateY(0) translateX(0)
    opacity: 1
  100%
    transform: translateY(1000px) translateX(1000px)
    opacity: 0

.slide-l1-enter,
.slide-l1-enter-active
  animation: slide-in-l 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
.slide-l1-leave,
.slide-l1-leave-active
  animation: slide-out-l 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.4s both

.slide-l2-enter,
.slide-l2-enter-active
  animation: slide-in-l 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s both
.slide-l2-leave,
.slide-l2-leave-active
  animation: slide-out-l 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.2s both

.slide-l3-enter,
.slide-l3-enter-active
  animation: slide-in-l 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.4s both
.slide-l3-leave,
.slide-l3-leave-active
  animation: slide-out-l 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

@keyframes slide-in-l
  0%
    transform: translateX(-200px)
    opacity: 0
  100%
    transform: translateX(0)
    opacity: 1

@keyframes slide-out-l
  0%
    transform: translateX(0)
    opacity: 1
  100%
    transform: translateX(-200px)
    opacity: 0
</style>
