<template>
  <button
    class="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100"
    @click="brewHausAction"
  >
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    buttonText: {
      required: true,
    },
  },
  methods: {
    brewHausAction() {
      this.$emit("brewHausAction");
    },
  },
};
</script>
