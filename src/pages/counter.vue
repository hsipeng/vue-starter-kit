<template>
  <counter :count="count"
           :isEvenOrOdd="isEvenOrOdd"
           @increment="increment"
           @decrement="decrement"
           @incrementIfAsync="incrementIfAsync"
           @decrementIfAsync="decrementIfAsync">
  </counter>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import Counter from '../components/Counter.vue'

const {
  mapState,
  mapGetters,
  mapActions
} = createNamespacedHelpers('counter')

export default {
  name: 'app',
  computed: {
    ...mapState({count: state => state.count}),
    ...mapGetters(['isEvenOrOdd'])
  },
  methods: {
    ...mapActions([
      'incrementIfAsync',
      'decrementIfAsync',
      'increment',
      'decrement'
    ])
  },
  components: {
    Counter
  }
}
</script>
