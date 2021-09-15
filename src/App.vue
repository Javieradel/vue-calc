<template>
    <div class="calc-body">
      <display />
      <keyboard />
    </div>
</template>

<script>
import display from '@/components/display.vue'
import keyboard from '@/components/keyboard'
import store from '@/store'
import {computed} from 'vue'
export default {
  name: 'App',
  components: {
    display,
    keyboard,
  },
  setup(){
  
    return {
      operation: computed(()=> store.state.operation),
      input: computed(()=> store.state.input),
      operate: computed(()=> store.state.resolve),
    }
  }
}
</script>

<style lang="scss">
body{
  background-color: #001;
  color: white;
  font-family: 'Segoe UI',sans-serif;
}
  .calc-body{
    margin: 10% auto;
    color: black;
    width: 525px;
    background: #f2f2f2;
  }

</style>
