<template>
  <div>
    <app-header></app-header>
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <app-footer></app-footer>
          <div class="modal" id="modal-1" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <a href="#" class="close" role="button" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </a>
      <h5 class="modal-title">Modal title</h5>
      <p>
        This is the modal content. Almost any type of content can be presented to the user here.
      </p>
      <div class="text-right mt-20"> <!-- text-right = text-align: right, mt-20 = margin-top: 2rem (20px) -->
        <a href="#" class="btn mr-5" role="button">Close</a>
        <a href="#" class="btn btn-primary" role="button">I understand</a>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'ninjas': Ninjas
  },
  data () {
    return {
      ninjas: [
          {name: 'Ryu', speciality: 'Vue Components', show: false},
          {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
          {name: 'Hitoshi', speciality: 'Click Events', show: false},
          {name: 'Tango', speciality: 'Conditionals', show: false},
          {name: 'Kami', speciality: 'Webpack', show: false},
          {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ]
    }
  }
}
</script>

<style>

</style>
