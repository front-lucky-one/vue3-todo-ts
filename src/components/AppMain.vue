<template>
    <section class="todo-section">
      <div class="container">
        <ul class="list">
          <ToDoItem v-for="item in getTasksInState" :key="item.id" :todo="item"/>
        </ul>
        <button class="create-btn"><div class="plus"></div> Create new task</button>
      </div>
    </section>
</template>

<script>
import ToDoItem  from '@/components/ToDoItem.vue'
import {defineComponent} from 'vue'
import {mapGetters} from 'vuex'
export default defineComponent({
 
  data(){
    return{}
  },
  methods:{
  },
  components:{
    ToDoItem
  },
  computed:{
    ...mapGetters(['getTasksInState'])
  }
})
</script>

<style scoped>

</style>
