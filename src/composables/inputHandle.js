import store from '@/store.js'
function init_handleInput(){
  document.addEventListener('keydown',handleInput);
}
const allowsInputs =['0','1','2','3','4','5','6','7','8','9']
const allowsOperators =['/','*','-','+']
const handleInput= (e)=>{
  let value = e.key
  console.log(typeof e.key, value);
  if(allowsInputs.includes(value)){
    store.commit('SET_INPUT',value)
  }
  if(allowsOperators.includes(value)){
    store.commit('SET_OPERATOR',value)
  }
  if(value == 'Enter'){
    store.commit('OPERATE', true)
  }
  if(value== 'Backspace'){
    store.commit('DEL')
  }
  // store.commit('SET_INPUT',e.key)
  //console.log(store.state.input)
}
export default init_handleInput;
