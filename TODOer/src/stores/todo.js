import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => {
    return {
      todos: [],
      todoForm: {},
    };
  },

  actions: {
    addTodo(todoObject) {
      this.todos.push(todoObject);
    },
    deleteTodo(id) {
      this.todos.splice(id, 1);
    },
    updateTodo(todoObject, id) {
      this.todos[id] = todoObject;
    },
    setDone(id, val) {
      this.todos[id].isDone = val;
    },
  },
});
