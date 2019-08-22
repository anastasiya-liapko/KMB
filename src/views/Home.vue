<template>
  <div class="home">
    <transition name="flip" mode="out-in">
      <component :is="mode"></component>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Enter from '@/components/Enter.vue'
import Slider from '@/components/Slider.vue'
// import Post from '@/components/Post.vue'
// import Contacts from '@/components/Contacts.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      mode: 'app-slider'
    }
  },
  computed: {
    ...mapGetters([
      'flip'
    ])
  },
  created () {
    this.entered(this.flip)
  },
  methods: {
    entered (flip) {
      if (flip) {
        this.mode = 'app-slider'
      } else {
        this.mode = 'app-enter'
      }
    }
  },
  components: {
    'app-enter': Enter,
    'app-slider': Slider
    // 'app-post': Post,
    // 'app-contacts': Contacts
  },
  watch: {
    flip: function () {
      this.entered(this.flip)
    }
  }
}
</script>

<style lang="sass">
.flip-enter,
.flip-enter-active
  animation: flip-in-ver-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

.flip-leave,
.flip-leave-active
  animation: flip-out-ver-left 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

@keyframes flip-out-ver-left
  0%
    transform: rotateY(0)
    opacity: 1
  100%
    transform: rotateY(-70deg)
    opacity: 0

@keyframes flip-in-ver-left
  0%
    transform: rotateY(80deg)
    opacity: 0
  100%
    transform: rotateY(0)
    opacity: 1
</style>
