<template>
  <main>
    <Menu />

    <h1>{{ $t("welcome") }}</h1>

    <nuxt-link to="/admin/produtos">
      {{ $t("administration") }}
    </nuxt-link>

    <div>
      {{ counter }}

      <button @click="increment">
        {{ $t("increment") }}
      </button>
      <button @click="decrement">
        {{ $t("decrement") }}
      </button>
    </div>
  </main>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("counter", {
      counter: "value",
    }),
  },

  methods: {
    ...mapMutations({
      increment: "counter/increment",
      decrement: "counter/decrement",
    }),
  },
};
</script>
