<template>
  
  <li>
    <span>{{val}}</span>
  </li>

</template>
<script>
import {defineComponent } from 'vue'

export default defineComponent({
    
props: {
 val: {
    type: [String,Number],
    default: ''
  }
  }

  })
</script>

<style lang="scss" scoped>
  li{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: calc(100%/3);
    height: 130px;
    background: #2d2d2f;
    margin: 0 !important;
    color: whitesmoke;
    font-size: 2rem;
  }
</style>
