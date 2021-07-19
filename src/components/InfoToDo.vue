<template>
   <div class="info">
              <h3 class="info__title">{{title}}</h3>
              <span class="info__number">{{count}}</span>
          </div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
  props:{
   title:{
     type: String,
     default: ''
   },
   count:{
     type:Number,
     default: 0
   }
  },
  data(){
    return{}
  },
  methods:{
  }
})
</script>

<style scoped>
</style>
