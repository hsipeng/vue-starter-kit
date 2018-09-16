<template>
  <div>
    <div>{{ count }},this value is {{ isEvenOrOdd }}</div>
    <button @click="$emit('increment')">+</button>
    <button @click="$emit('incrementIfAsync')">async+</button>
    <button @click="$emit('decrement')">-</button>
    <button @click="$emit('decrementIfAsync')">async-</button>
  </div>
</template>
<script>
export default {
  props: {
    count: Number,
    isEvenOrOdd: String
  }
}
</script>
