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
</style>
