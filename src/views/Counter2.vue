<template>
  <div class="count">
    <counter :count="count"
             :isEvenOrOdd="isEvenOrOdd"
             @increment="increment"
             @decrement="decrement"
             @incrementIfAsync="incrementIfAsync"
             @decrementIfAsync="decrementIfAsync">
    </counter>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {createNamespacedHelpers} from 'vuex';
import Counter from '@/components/Counter.vue';
import {IState} from '../store/modules/counter';

const {
  mapState,
  mapGetters,
  mapActions,
} = createNamespacedHelpers('counter');

export default Vue.extend({
  name: 'app',
  computed: {
    ...mapState({count: (state: IState) => state.count}),
    ...mapGetters(['isEvenOrOdd']),
  },
  methods: {
    ...mapActions([
      'incrementIfAsync',
      'decrementIfAsync',
      'increment',
      'decrement',
    ]),
  },
  components: {
    Counter,
  },
});
</script>
