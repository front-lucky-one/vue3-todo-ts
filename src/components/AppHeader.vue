<template>
<header  class="header">
 <div class="container">
      <h2 class="section-title">To Do list</h2>
      <div class="info-wrapp">
          <InfoToDo title="Scope" :count="3"/>
          <InfoToDo title="Active" :count="2"/>
          <InfoToDo title="Successful" :count="1"/>
      </div>

   </div> 
   <button class="addBtn" @click="addTaskToList"></button>
</header>
  
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {mapActions} from 'vuex'
import InfoToDo from '@/components/InfoToDo.vue'
export default defineComponent({
    components:{
      InfoToDo
    },
   methods:{
       ...mapActions(['addTaskToList'])
   }
})
</script>
