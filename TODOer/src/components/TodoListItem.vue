<script setup>
defineProps({
  icon: String,
  heading: String,
  description: String,
  id: Number,
  isUrgent: Boolean,
  isDone: Boolean,
});

const emit = defineEmits(["deleteClicked", "editClicked", "taskChecked"]);
</script>

<template>
  <div
    class="bg-dark rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all ease duration-150 p-2"
  >
    <article class="details">
      <h5 class="text-white text-lg mb-2 font-semibold">
        <div class="flex items-center gap-2">
          <input
            class="h-4 w-4"
            type="checkbox"
            name="is-done"
            :id="`is-done-${id}`"
            :checked="isDone"
            @input="emit('taskChecked', $event.target.checked)"
          />
          <label
            :class="{ ' line-through text-primary': isDone }"
            :for="`is-done-${id}`"
          >
            {{ heading }}
          </label>
          <span
            v-if="isUrgent"
            class="gap-1 flex items-center bg-red-800 text-red-100 text-xs mr-2 px-2.5 py-0.5 rounded-full"
          >
            <div class="w-2 h-2 bg-red-500 rounded-full"></div>
            <div class="font-bold mb-1">urgent</div>
          </span>
          <button @click="emit('editClicked')" class="ml-auto">
            <img src="@/assets/edit.svg" class="h-6 w-6" alt="" />
          </button>
          <button @click="emit('deleteClicked')">
            <img src="@/assets/delete.svg" class="h-6 w-6" alt="" />
          </button>
        </div>
      </h5>
      <p class="px-7">
        {{ description }}
      </p>
    </article>
  </div>
</template>

<style scoped>
.priority-icon {
  height: 50%;
  width: 50%;
}
</style>
