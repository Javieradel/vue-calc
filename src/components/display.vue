<template>
  <div class="container">
    <div class="div current-operation">
      {{currentOperation}}
    </div>
    <div class="current-result">
      {{currentResult}}
    </div>
  </div>
</template>
<script>
import { computed, defineComponent} from 'vue'
import store from '@/store'
export default defineComponent({
  setup() {
    //const input = computed(()=> store.state.input)    
    // const currentInput = computed(()=> store.getters.currentInput)
    
    
    const currentResult = computed(()=> store.getters.currentResult)
    const currentOperation = computed(()=> store.getters.currentOperation)
    return {
      currentOperation,
      currentResult
    }
  },
})

</script>
<style lang="scss" scoped>
  .container{
    margin: 0;
    padding: 10px 10px;
    .current-operation{
      height: 3.5rem;
      text-align: right;
      font-size: 3rem;
      overflow-x: scroll;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar{
        display: none;
      }
    }
    .current-result{
      text-align: right;
      font-size: 2rem;
      overflow-x: scroll;
      height: 3rem;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar{
        display: none;
      }
    }
  }
</style>
