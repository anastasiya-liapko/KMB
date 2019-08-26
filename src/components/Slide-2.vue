<template>
  <div class="slide-2">
    <div class="slide-2__content content">
      <button>test</button>
    </div>

    <transition name="slide-bl">
      <div class="triangle-gray"></div>
    </transition>

    <transition name="slide-bl">
      <div class="rect-green"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'slide-2'
}
</script>

<style lang="sass">
// .slide-2
//   position: relative
//   width: 100vw
//   height: 100vh
//   background-color: yellow
</style>
