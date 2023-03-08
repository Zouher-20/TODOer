<script setup>
import { reactive, ref } from "vue";
import { useTodoStore } from "@/stores/todo.js";
import { useRouter } from "vue-router";
import TodoForm from "../components/TodoForm.vue";
import { useToastStore } from "../stores/toast";

const router = useRouter();
const { addTodo } = useTodoStore();
const { showToast } = useToastStore();
const todoObject = ref({
  heading: "",
  description: "",
  isUrgent: false,
  isDone: false,
});
const onSubmit = () => {
  addTodo(todoObject.value);
  showToast("Task added successfully !");
  router.push("/");
};
</script>

<template>
  <TodoForm
    v-model:heading="todoObject.heading"
    v-model:description="todoObject.description"
    v-model:isUrgent="todoObject.isUrgent"
    @form-submited="onSubmit"
  />
</template>
