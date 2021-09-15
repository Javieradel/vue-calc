<template>
  <div class="container">
    <div class="calc-body">
    
    <display />
    <keyboard />
    </div>
    <h1>{{operation}}</h1>
    <h1>{{input}}</h1>
    <h1>{{operate}}</h1>
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
.container{
  width: auto;
  margin: 10% auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  .calc-body{
    color: black;
    width: 525px;
    background: #f2f2f2;
  }
}

</style>
