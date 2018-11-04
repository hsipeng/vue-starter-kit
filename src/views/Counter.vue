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
import { Component, Vue,} from 'vue-property-decorator';
import Counter from "@/components/Counter.vue";
import { Getter, Action,State, namespace} from 'vuex-class'
// 命名空间
const counterModule = namespace('counter')
@Component({
  components: {
    Counter
  },
})
export default class CounterContainer extends Vue {
  @counterModule.State('count') public count?: number;
  @counterModule.Getter('isEvenOrOdd') public isEvenOrOdd?: string;
  @counterModule.Action('increment') public increment: any;
  @counterModule.Action('decrement') public decrement: any;
  @counterModule.Action('incrementIfAsync') public incrementIfAsync: any;
  @counterModule.Action('decrementIfAsync') public decrementIfAsync: any;
}
</script>
