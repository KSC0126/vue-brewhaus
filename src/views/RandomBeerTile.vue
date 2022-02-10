<template>
  <div class="relative">
    <img
      class="w-6 h-1/6 object-center object-cover lg:w-1/6 lg:h-1/6"
      :src="beer.image_url"
      :alt="imgAlt"
    />
    <div class="mt-2 relative">
      <div class="relative">
        <div class="text-xs text-slate-600 uppercase font-bold tracking-wider">
          {{ beer.name }}
        </div>
        <div class="font-bold text-slate-700 leading-snug">
          <a :href="url" class="hover:underline">{{ beer.name }}</a>
        </div>
        <div class="mt-2 text-sm text-slate-600">{{ beer.name }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    beer: {
      required: true,
    },
  },
};
</script>
