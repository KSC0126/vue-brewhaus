<template>
  <div class="lg:text-center">
    <p
      class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
    >
      Brewhaus
    </p>
    <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
     If you are familiar with beer ID please enter it, clicking the button will give you a random beer details.
    </p>
  </div>
  <div class="pt-2 relative mx-auto text-gray-600">
    <input
      class="border-2 border-gray-300 h-10 px-5 pr-20 rounded-lg"
      name="search"
      v-model="beerSearch"
      placeholder="Type your name here"
    />
    <button
      class="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100"
      @click="getBeerDetails"
    >
      {{buttonText}}
    </button>
    <BeerTile
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
      v-if="isReadyForRandomBeerDetails"
      :beer="singleBeerDetails"
      :isFullDetails="true"
    ></BeerTile>
  </div>
</template>
<script lang="ts">
import BeerTile from "./BeerTile.vue";
export default {
  components: {
    BeerTile,
  },
  data() {
    return {
      beerSearch: "",
      singleBeerDetails: {},
      isReadyForRandomBeerDetails: false,
    };
  },
  computed: {
    isInputGiven(): boolean {
     return this.beerSearch !== "" ? true : false;
    },
    beerApi(): string {
      console.log(this.beerSearch)
      return this.isInputGiven ? `https://api.punkapi.com/v2/beers/${this.beerSearch}` : 'https://api.punkapi.com/v2/beers/random'
    },
    buttonText(): string {
      return this.isInputGiven ? 'submit' : 'Random beer details'
    }
  },
  
  methods: {
    getBeerDetails(){
      this.axios
        .get(`${this.beerApi}`)
        .then((response) => {
          this.singleBeerDetails = response.data[0];
          this.isReadyForRandomBeerDetails = true;
        });
    },
  },
};
</script>
