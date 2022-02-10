<template>
  <div v-if="!isFullDetails">
    <dt>
      <div class="absolute flex items-center justify-center rounded-md">
        <img :src="beer.image_url" class="h-6 w-6 h-1/6" aria-hidden="true" />
      </div>
      <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
        {{ beer.name }}
      </p>
    </dt>
    <dd class="mt-2 ml-12 text-sm text-gray-500">
      {{ beer.description }}
    </dd>
  </div>
  <div v-else>
    <div class=" "></div>
    <dt>
      <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
        Name: {{ beer.name }}
      </p>
    </dt>
    <dd class="mt-10 pl-100px ml-6 text-sm text-gray-500">
      Description: {{ beer.description }}
    </dd>
    <dd class="mt-10 pl-100px ml-6 text-sm text-gray-500">
      ABD: {{ beer.abv }}
    </dd>
    <dd class="mt-10 pl-100px ml-6 text-sm text-gray-500">
      First Brewed: {{ beer.first_brewed }}
    </dd>
    <dd class="mt-10 pl-100px ml-6 text-sm text-gray-500">
      Brewer Tips: {{ beer.brewers_tips }}
    </dd>
    <dd class="mt-10 pl-100px ml-6 text-sm text-gray-500">
      Tag Line: {{ beer.tagline }}
    </dd>
    <img
      v-if="beer.image_url"
      :src="beer.image_url"
      class="h-20 w-20 h-1/6 mr-20"
      aria-hidden="true"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    beer: {
      required: true,
    },
    isFullDetails: {
      required: true,
      default: true,
    },
  },
  data() {
    return {
      isFullDetailsRquested: false,
    };
  },
};
</script>
