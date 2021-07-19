import { createStore } from 'vuex'

interface ToDo {
  date: Date;
  text: string;
  completed: boolean;
  id:number;
}

export default createStore({
  state: {
    tasks: [] as ToDo[],
    id: 0
  },
  mutations: {
    ADD_TASK_IN_STATE(state){
      state.id++
      const newTask = {
        date: new Date(),
        text:'',
        completed: false,
        id: state.id
      };
    state.tasks.push(newTask)
    
    },
    REMOVE_TASK_FROM_LIST(state, id:number) {
      console.log(id)
      state.tasks = state.tasks.filter(task => task.id != id)
      console.log(state.tasks)
     
    },
    COMPLITED_CURRENT_TASK(state,id:number) {
      const index = state.tasks.findIndex((e)=>e.id == id)
      state.tasks[index].completed = true
      state.tasks  = [...state.tasks]

    }
    
  },
  actions: {
    addTaskToList({commit},payload){
      commit('ADD_TASK_IN_STATE')
    },
    deleteTask({commit},id) {
      commit('REMOVE_TASK_FROM_LIST',id)
    },
    complitedTask({commit},id){
      commit('COMPLITED_CURRENT_TASK',id)
    }
    
  },
  getters:{
    getTasksInState(state){
      console.log(state.tasks,'getters')
      return state.tasks
    }
  }
})
