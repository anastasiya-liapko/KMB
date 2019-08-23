<template>
  <transition name="modal" appear>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div :id="id" class="modal-container popup">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="hideModal(id)">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      id: 'js-photo'
    }
  },
  methods: {
    ...mapActions([
      'hideModal'
    ])
  }
}
</script>

<style lang="sass">

</style>
