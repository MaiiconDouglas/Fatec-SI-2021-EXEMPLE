<template>
  <main>
    <Menu />

    <ul
      v-if="$fetchState.pending"
      class="p-6 flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6"
    >
      <li
        v-for="n of 5"
        :key="n"
        class="flex-1 w-full rounded shadow bg-white overflow-hidden px-3 py-2"
      >
        <content-placeholders-heading />
      </li>
    </ul>

    <ul
      v-else
      class="p-6 flex flex-wrap flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6"
    >
      <li
        v-for="item of starships"
        :key="item.name"
        class="flex-1 w-full rounded shadow bg-white overflow-hidden px-3 py-2"
      >
        <strong>{{ item.name }}</strong>
        <p class="m-0 text-gray-500 text-xs">{{ item.model }}</p>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      starships: [],
    };
  },

  async fetch() {
    // Sintaxe tradicional usando Promise e window.fetch.
    /*
    fetch("https://swapi.dev/api/starships")
      .then((response) => response.json())
      .then((json) => (this.starships = json.results));
    */

    // Sintaxe moderna com async/await e window.fetch.
    /*
    const response = await fetch("https://swapi.dev/api/starships");
    const json = await response.json();
    this.starships = json.results;
    */

    // Sintaxe moderna com o pacote Axios para ajudar.
    const data = await this.$axios.$get("https://swapi.dev/api/starships");
    this.starships = data.results;
  },
};
</script>
