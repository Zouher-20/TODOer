<script setup>
const emit = defineEmits([
  "formSubmited",
  "update:heading",
  "update:description",
  "update:isUrgent",
]);
defineProps({
  heading: String,
  description: String,
  isUrgent: Boolean,
});

const onSubmit = () => {
  emit("formSubmited");
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="grid gap-6 mb-6">
      <div>
        <label for="heading" class="block mb-2 text-sm font-medium"
          >Heading</label
        >
        <input
          :value="heading"
          @input="$emit('update:heading', $event.target.value)"
          type="text"
          id="heading"
          class="bg-dark2 text-white border border-primary text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full p-2.5"
          required
        />
      </div>
      <div>
        <label for="description" class="block mb-2 text-sm font-medium"
          >Description</label
        >
        <textarea
          :value="description"
          @input="$emit('update:description', $event.target.value)"
          type="text"
          id="description"
          rows="4"
          class="bg-dark2 text-white border border-primary text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full p-2.5"
          required
        />
      </div>
      <div class="flex items-center gap-2 mb-4">
        <div class="flex items-center h-5">
          <input
            :checked="isUrgent"
            @input="$emit('update:isUrgent', $event.target.checked)"
            id="urgent"
            type="checkbox"
            class="w-4 h-4 border rounded"
          />
        </div>
        <label for="urgent" class="text-md font-medium">Urgent</label>
      </div>
      <button
        type="submit"
        class="bg-primary text-white outline-none rounded-full px-8 py-3 text-md font-bold hover:opacity-80 transition-all duration-200 ease"
      >
        Save
      </button>
    </div>
  </form>
</template>

<style></style>
