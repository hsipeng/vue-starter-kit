<template>
  <div class="about">
    <h1>Hello Component</h1>
    <hello-component :name="name" :initialEnthusiasm="5" />
    <h1>Hello Decorator Component</h1>
    <hello-decorator-component :name="name" :initialEnthusiasm="5" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloComponent from "@/components/Hello.vue";
import HelloDecoratorComponent from "@/components/HelloDecorator.vue";

@Component({
  components: {
    HelloComponent,
    HelloDecoratorComponent
  },
})
export default class Home extends Vue {}
</script>