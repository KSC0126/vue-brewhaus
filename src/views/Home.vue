<template>
  <div
    class="py-12 bg-white flex flex-col-reverse justify-end overscroll-contain"
    id="beer-list"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Brewhaus
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Life is better with beer.
        </p>
      </div>

      <div class="mt-10" v-if="!isBeerDataLoading">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
        >
          <div v-for="beer in beers" :key="beer.name" class="relative">
            <BeerTile :beer="beer" :isFullDetails="false" />
          </div>
        </dl>
      </div>
      <div v-else class="flex items-center justify-center">
        <div
          class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
  <BrewhausButton
    :button-text="buttonText"
    @brewHausAction="getNextSetOfBeers"
  />
</template>

<script lang="ts">
import BeerTile from "./BeerTile.vue";
import BrewhausButton from "./BrewhausButton.vue";

export default {
  data() {
    return {
      beers: [],
      beerCount: 10,
      isBeerDataLoading: false,
      buttonText: "Load next 10 beers",
    };
  },
  components: {
    BeerTile,
    BrewhausButton,
  },
  created() {
    this.getBeerDetails();
  },
  methods: {
    getBeerDetails(): void {
      this.isBeerDataLoading = true;
      this.axios
        .get(
          `https://api.punkapi.com/v2/beers?page=2&per_page=${this.beerCount}`
        )
        .then((response) => {
          console.log("repsonse", response.data);
          this.beers = response.data;
        });
      this.isBeerDataLoading = false;
    },
    getNextSetOfBeers(): void {
      if (this.beerCount < 80) {
        this.beerCount = this.beerCount + 10;
        console.log("this.beerCount", this.beerCount);
        this.getBeerDetails();
      } else {
        this.buttonText = "You have viewed all 80 beers";
      }
    },
  },
};
</script>
