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
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
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

.fade-in-leave,
.fade-in-leave-active
  animation-name: fadeOutLeft
  animation-duration: 0.3s

@keyframes fade-in
  0%
    opacity: 0
  100%
    opacity: 1
</style>
