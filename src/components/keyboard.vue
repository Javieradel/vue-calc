<template>
  <div class="container-keys">
  <ul class="pad">
    <key v-for="(k,index) in keys"
    :key="index"
    :val="k.value"
    @click="handleNumberInput(k.value)"
    />
  </ul>
  <ul class="options">
    <li @click="del">
      <span>DEL</span>
    </li>
    <li @click="setOperator('+')">
      <span>+</span>
    </li>
    <li @click="setOperator('*')">
      <span>x</span>
    </li>
    <li @click="setOperator('-')">
      <span>-</span>
    </li>
    <li @click="setOperator('/')">
      <span>÷</span>
    </li>
  </ul>
  </div>
</template>
<script>
import { defineComponent,} from 'vue'
import store from '@/store'
import handleInput from '@/composables/inputHandle'
import key from '@/components/key'
export default defineComponent({
  components: {
    key
  },
  setup() {
    handleInput()
    const keys= [
      {
        value: 7,
      },
      {
        value: 8,
      },
      {
        value: 9,
      },
      {
        value: 4,
      },
      {
        value: 5,
      },
      {
        value: 6,
      },
      {
        value: 1,
      },
      {
        value: 2,
      },
      {
        value: 3,
      },
      {
        value: '.',
      },
      {
       value: 0 
      },
      { 
        value: '=' 
      }
    ]
    const handleNumberInput = (number)=>{
      if (number == '.' && store.state.input.includes('.')) {
        return 0;
      }
      if (number == '=' ) {
        store.commit('OPERATE', true);
        return 0;
      }
      store.commit('SET_INPUT',number)
    }
    const setOperator = (op) => {
      store.commit('SET_OPERATOR',op)
    }
    const del = () => {
      store.commit('DEL')
    }
    // const currentPress= ref('0')
    //
    //
    return {
      keys,
      handleNumberInput,
      setOperator,
      del
    }
  },
})
</script>
<style lang="scss" scoped>
  .container-keys {
    display: flex;
    flex-flow: row;
    background: #2d2d2f;
    padding: 0;
    margin: 0;
    ul{
      margin: 0;
      padding: 0;
      li{
        cursor: pointer;
        -moz-user-select: none; 
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none; 
      }
      li:hover{
          color: #24abc5;
        }
    }
    .pad{
      width: 75%;
    }
    .options{
      li{
        background: #434343;
         display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 105px;
        margin: 0 !important;
        color: whitesmoke;
        font-size: 2rem;
        
      }
      width: 25%;
    }

  }
</style>
