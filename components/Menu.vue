<template>
  <header
    class="flex flex-col sm:flex-row justify-between items-center px-4 py-2 bg-gray-100 shadow"
  >
    <nuxt-link to="/" class="relative mb-2 sm:mb-0">
      <img
        src="~/assets/images/logo.png"
        alt="Fatec Taquaritinga"
        class="h-10"
      />

      <span
        class="absolute rounded-full bg-red-500 text-white text-[0.5rem] w-3 h-3 text-center top-1 -right-1"
      >
        {{ counter }}
      </span>
    </nuxt-link>

    <nav class="flex space-x-3 text-sm">
      <nuxt-link
        v-for="item of items"
        :key="item.url"
        :to="item.url"
        class="text-red-700 transition hover:text-red-500"
        exact-active-class="underline"
      >
        {{ item.text }}
      </nuxt-link>
    </nav>

    <div class="mt-2 sm:mt-0">
      <a
        href="#"
        v-for="locale of availableLocales"
        :key="locale.code"
        @click.prevent="switchLocalePath(locale.code)"
      >
        <img
          :src="require(`~/assets/images/${locale.code}.svg`)"
          :alt="locale.name"
          class="w-4 h-4"
        />
      </a>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      items: [
        { url: "/", text: this.$t("menu.home") },
        { url: "/produtos", text: this.$t("menu.products") },
        { url: "/servicos", text: this.$t("menu.services") },
        { url: "/contato", text: this.$t("menu.contact") },
      ],
    };
  },

  computed: {
    ...mapState("counter", {
      counter: "value",
    }),

    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },

  methods: {
    switchLocalePath(code) {
      this.$i18n.setLocale(code);
    },
  },
};
</script>
