<script setup>
import TodoList from "../components/TodoList.vue";
</script>

<template>
  <main>
    <TodoList class="mb-16" />
    <RouterLink to="/add-todo" class="fixed bottom-4 right-4 z-10">
      <button
        type="button"
        class="border bg-dark outline-none hover:bg-gray-100 rounded-full px-5 py-3 text-primary text-xl font-bold hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 ease"
      >
        <span class="text-4xl">+</span>
      </button>
    </RouterLink>
  </main>
</template>
