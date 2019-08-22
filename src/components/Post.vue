<template>
  <div class="post">
    <button @click="changeMode('')">Назад</button>
    <!-- <div class="triangle triangle-top"></div> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'post',
  methods: {
    ...mapActions([
      'changeMode'
    ])
  }
}
</script>

<style lang="sass">
.post
  position: relative
  width: 100vw
  height: 100vh
  background-color: purple
  button
    width: 200px
    height: 50px
    color: white
    background-color: blue
</style>
