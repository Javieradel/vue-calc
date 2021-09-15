import {createStore} from 'vuex'

const store = createStore({
  state: {
    input: '',
    operation: 'none',
    history: [],
    resolve: false,
    result:''
  },
  mutations: {
    SET_INPUT(state ,payload){
      state.input +=payload
    },
    SET_OPERATOR(state,payload){
      state.operation= payload
      state.input+= payload
    },
    DEL(state){
      state.input = state.input.slice(0, state.input.length-1)
    },
    SET_RESULT(state){
      state.result= eval(state.input)
    }
  },
  actions: {
  },
  getters: {
    currentResult(state){
      return eval(state.input)
    },
    currentOperation(state){
     let newOperation = state.input.replace('/','÷');
     newOperation = newOperation.replace('*','x')
     return newOperation;
    }
  }

})
export default store
