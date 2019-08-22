<template>
  <div class="contacts">
    <button @click="changeMode('')">Назад</button>
    <!-- <div class="triangle triangle-top"></div> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'contacts',
  methods: {
    ...mapActions([
      'changeMode'
    ])
  }
}
</script>

<style lang="sass">
.contacts
  position: relative
  width: 100vw
  height: 100vh
  background-color: lightblue
  button
    width: 200px
    height: 50px
    color: white
    background-color: blue
</style>
