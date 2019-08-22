<template>
  <div class="slide-3">
    <div class="checklist">
      <button @click="changeMode('app-post')">Статья</button>
      <button @click="changeMode('app-contacts')">Контакты</button>
      <button>Попап</button>
      <div class="triangle triangle-top"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'checklist',
  methods: {
    ...mapActions([
      'changeMode'
    ])
  }
}
</script>

<style lang="sass">
.checklist
  position: relative
  width: 100vw
  height: 100vh
  background-color: pink
  button
    width: 200px
    height: 50px
    color: white
    background-color: blue
</style>
