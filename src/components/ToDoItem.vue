<template>
     <div class="todo" :class="{todoActive: !disabledInput}">
           <div class="todo__control">
             <div class="todo__wrapp-info">
                 <input type="checkbox" name="" :id="`done${todo.id}`">
                 <label :for="`done${todo.id}`" @click="complitedTask(todo.id)"></label>
              <div class="todo__date">{{currentDate}}</div>
             </div>
           
             <div class="todo__wrapp-btn">
               <button class="todo__edit" @click="disabledInput = false" v-if="disabledInput"><img src="@/assets/img/edit.svg" alt=""></button>
               <button class="todo__done" @click="disabledInput = true" v-else><img src="@/assets/img/done.svg" alt=""></button>
               <button class="todo__delete" @click="deleteTask(todo.id)"><img src="@/assets/img/delete.svg" alt=""></button>
             </div>
           </div>
           <input class="todo__text" placeholder="Please enter task description" :disabled="disabledInput" :style="{textDecoration:todo.completed ? 'line-through':''}"/>
         </div>
</template>

<script>
import {defineComponent} from 'vue'
import {mapActions} from 'vuex'
export default defineComponent({
 props:{
   todo:{
     type:Object,
     default:()=>{return {}}
     }
   },
  data(){
    return {
      disabledInput:true,
    }
  },
  computed:{
    currentDate(){
      return new Intl.DateTimeFormat("en-AU", {year: "numeric", month: "short", day: "numeric"}).format(this.todo.date).replace(/\s/g, ' ')
    }
  },
  methods:{
    
    ...mapActions(['deleteTask','complitedTask']),
    editTask(){
      console.log(this)
    }
  }
})
</script>

<style scoped>

</style>
