<template>
  <div class="slider">
    <app-slick
      ref="slick"
      :options="slickOptions">
        <app-slide-1 class="slide"></app-slide-1>
        <app-slide-2 class="slide"></app-slide-2>
        <app-slide-3 class="slide"></app-slide-3>
    </app-slick>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import Slide1 from '@/components/Slide-1.vue'
import Slide2 from '@/components/Slide-2.vue'
import Slide3 from '@/components/Slide-3.vue'

export default {
  name: 'slider',
  data () {
    return {
      slickOptions: {
        slidesToShow: 1,
        dots: true,
        arrows: false
      }
    }
  },
  components: {
    'app-slick': Slick,
    'app-slide-1': Slide1,
    'app-slide-2': Slide2,
    'app-slide-3': Slide3
  }
}
</script>

<style lang="sass">
/* slick */
.slick-slider
  position: relative
  display: block
  box-sizing: border-box
  -webkit-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none
  -webkit-touch-callout: none
  -khtml-user-select: none
  -ms-touch-action: pan-y
  touch-action: pan-y
  -webkit-tap-highlight-color: transparent
.slick-list
  position: relative
  display: block
  overflow: hidden
  height: 100vh
  margin: 0
  padding: 0
.slick-list:focus
  outline: none
.slick-list.dragging
  cursor: pointer
  cursor: hand
.slick-slider .slick-track,
.slick-slider .slick-list
  -webkit-transform: translate3d(0, 0, 0)
  -moz-transform: translate3d(0, 0, 0)
  -ms-transform: translate3d(0, 0, 0)
  -o-transform: translate3d(0, 0, 0)
  transform: translate3d(0, 0, 0)
.slick-track
  position: relative
  top: 0
  left: 0
  display: block
  margin-left: auto
  margin-right: auto
.slick-track:before,
.slick-track:after
  display: table
  content: ''
.slick-track:after
  clear: both
.slick-loading .slick-track
  visibility: hidden
.slick-slide
  display: none
  float: left
  height: 100%
  min-height: 1px
[dir='rtl'] .slick-slide
  float: right
.slick-slide img
  display: block
.slick-slide.slick-loading img
  display: none
.slick-slide.dragging img
  pointer-events: none
.slick-initialized .slick-slide
  display: block
.slick-loading .slick-slide
  visibility: hidden
.slick-vertical .slick-slide
  display: block
  height: auto
  border: 1px solid transparent
.slick-arrow.slick-hidden
  display: none

.slick-dots
  position: absolute
  bottom: 0
  left: 0
  right: 0
  display: flex
  justify-content: center
  padding: 0
  list-style: none

.slider
  width: 100vw
  height: 100vh

.slide
  position: relative
  position: relative
  width: 100vw
  height: 100vh
  background-color: #ffffff
</style>
