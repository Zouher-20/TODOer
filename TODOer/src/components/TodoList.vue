<script setup>
import { ref } from "vue";
import { useToastStore } from "../stores/toast";
import { useTodoStore } from "../stores/todo";
import Modal from "./Modal.vue";
import TodoForm from "./TodoForm.vue";
import TodoListItem from "./TodoListItem.vue";

const { todos, deleteTodo, updateTodo, setDone } = useTodoStore();

const { showToast } = useToastStore();
const showDeleteModal = ref(false);
const showEditModal = ref(false);
const indexToUpdate = ref(null);
const objectToUpdate = ref({});

const onDeleteTask = (index) => {
  showDeleteModal.value = true;
};
const onDeleteConfirmed = (index) => {
  deleteTodo(index);
  showDeleteModal.value = false;
  showToast("Task deleted successfully !");
};
const onEditTask = (todoItem, index) => {
  objectToUpdate.value = { ...todoItem };
  showEditModal.value = true;
  indexToUpdate.value = index;
};
const onEditConfirmed = () => {
  updateTodo(objectToUpdate.value, indexToUpdate.value);
  showEditModal.value = false;
  indexToUpdate.value = null;
  objectToUpdate.value = {};
  showToast("Task updated successfully !");
};
const onTaskChecked = (index, val) => {
  setDone(index, val);
};
</script>

<template>
  <div
    v-if="todos.length > 0"
    class="bg-dark2 todo-container flex flex-col gap-3 overflow-auto p-5 border border-primary rounded-xl border-green-700"
  >
    <Modal
      v-model:showModal="showDeleteModal"
      @confirmed="onDeleteConfirmed"
      @canceled="showDeleteModal = false"
    >
      Are you sure you want to delete this task ?
    </Modal>
    <Modal
      v-model:showModal="showEditModal"
      @canceled="showEditModal = false"
      @confirmed="onEditConfirmed"
      :hideFooter="true"
    >
      <TodoForm
        v-model:heading="objectToUpdate.heading"
        v-model:description="objectToUpdate.description"
        v-model:isUrgent="objectToUpdate.isUrgent"
        @form-submited="onEditConfirmed"
      />
    </Modal>
    <TodoListItem
      v-for="(todoItem, index) in todos"
      :key="index"
      :heading="todoItem.heading"
      :description="todoItem.description"
      :isUrgent="todoItem.isUrgent"
      :id="index"
      :isDone="todoItem.isDone"
      @delete-clicked="onDeleteTask(index)"
      @edit-clicked="onEditTask(todoItem, index)"
      @task-checked="onTaskChecked(index, $event)"
    />
  </div>
  <div v-else class="text-center text-sm w-100 mt-8">
    It looks like you have nothing to do ... <br />
    add new task to get started
  </div>
</template>

<style>
.todo-container {
  max-height: 600px;
}
</style>
