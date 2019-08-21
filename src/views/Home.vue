<template>
  <div class="home">
    <transition name="flip" mode="out-in">
      <component :is="mode" @answered="answered(flip)" @confirmed="mode = 'app-enter'"></component>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Enter from '@/components/Enter.vue'
import Slider from '@/components/Slider.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      mode: 'app-enter'
    }
  },
  computed: {
    ...mapGetters([
      'flip'
    ])
  },
  methods: {
    entered (isCorrect) {
      if (isCorrect) {
        this.mode = 'app-slider'
      } else {
        this.mode = 'app-enter'
      }
    }
  },
  components: {
    'app-enter': Enter,
    'app-slider': Slider
  }
}
</script>

<style lang="sass">
.flip-enter,
.flip-enter-active
  animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both

.flip-leave,
.flip-leave-active
  animation-name: fadeOutLeft
  animation-duration: 0.3s
</style>
