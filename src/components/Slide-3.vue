<template>
  <div class="slide-3">
    <div class="checklist">
      <button @click="changeMode('app-post')">Статья</button>
      <button @click="changeMode('app-contacts')">Контакты</button>
      <button @click="showModal('js-phone')">
        Попап
      </button>
      <app-photo v-if="modalShow"></app-photo>
      <!-- <div class="triangle triangle-top"></div> -->
    </div>

    <transition name="slide" mode="out-in">
      <component :is="mode"></component>
    </transition>
    <div class="triangle triangle-top"></div>
  </div>
</template>

<script>
// import Checklist from '@/components/Checklist.vue'
import Contacts from '@/components/Contacts.vue'
import Post from '@/components/Post.vue'
import Photo from '@/components/ModalPhoto.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'slide-3',
  computed: {
    ...mapGetters([
      'mode',
      'modalId',
      'modalShow'
    ])
  },
  created: function () {
    document.addEventListener('mouseup', this.hide)
  },
  beforeDestroy: function () {
    document.removeEventListener('mouseup', this.hide)
  },
  methods: {
    ...mapActions([
      'changeMode',
      'showModal',
      'hideModal'
    ]),
    hide (e) {
      if (document.querySelector('.modal-container') !== null) {
        var modalId = document.querySelector('.modal-container').getAttribute('id')
      }
      if (!e.target.classList.contains('modal-container') && e.target.closest('.modal-container') === null) {
        this.hideModal(modalId)
      }
    }
  },
  components: {
    // 'app-checklist': Checklist,
    'app-contacts': Contacts,
    'app-post': Post,
    'app-photo': Photo
  }
}
</script>

<style lang="sass">
.slide-3
  position: relative
  width: 100vw
  height: 100vh

.checklist
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: red
  button
    width: 200px
    height: 50px
    color: white
    background-color: blue

.slide-enter,
.slide-enter-active
  position: absolute
  animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

.slide-leave,
.slide-leave-active
  animation: slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both

@keyframes slide-in-left
  0%
    transform: translateX(-1000px)
    opacity: 0
  100%
    transform: translateX(0)
    opacity: 1

@keyframes slide-out-left
  0%
    transform: translateX(0)
    opacity: 1
  100%
    transform: translateX(-1000px)
    opacity: 0

.swing-enter,
.swing-enter-active
  position: absolute
  animation: swing-in-left-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both

.swing-leave,
.swing-leave-active
  animation: swing-out-left-fwd 0.55s cubic-bezier(0.600, -0.280, 0.735, 0.045) both

@keyframes swing-in-left-bck
  0%
    transform: rotateY(-70deg)
    transform-origin: left
    opacity: 0
  100%
    transform: rotateY(0)
    transform-origin: left
    opacity: 1

@keyframes swing-out-left-fwd
  0%
    transform: rotateY(0)
    transform-origin: left
    opacity: 1
  100%
    transform: rotateY(-70deg)
    transform-origin: left
    opacity: 0
</style>
