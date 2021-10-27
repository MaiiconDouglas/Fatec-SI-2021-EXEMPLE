<template>
  <main>
    <Menu />

    <ul
      v-if="products && products.length > 0"
      class="p-6 flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6"
    >
      <li
        v-for="item of products"
        :key="item.title"
        class="flex-1 w-full rounded shadow bg-white overflow-hidden"
      >
        <img :src="item.image" class="w-full h-28 object-cover" />

        <div class="flex justify-between px-4 py-2 leading-none">
          <div>
            <strong>{{ item.title }}</strong>
            <p class="text-gray-400 text-sm">{{ item.description }}</p>
            <small>{{ $d(item.createdAt, "dateOnly") }}</small>
          </div>

          <strong
            class="flex items-center justify-center text-xl text-green-800"
          >
            {{ $n(item.price, "currency") }}
          </strong>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },

  mounted() {
    // this.products = JSON.parse(localStorage.getItem("products"));

    this.products = [
      {
        title: "Batata Doce",
        description: "Preço por quilo",
        price: 3.75,
        image:
          "https://conteudo.imguol.com.br/c/entretenimento/ed/2019/06/14/batata-doce-1560551337997_v2_450x337.jpg",
        createdAt: new Date("2020-12-31T23:17:00-0300"),
      },

      {
        title: "Abacaxi Enlatado",
        description: "Muito docinho",
        price: 8.25,
        image: "https://sc04.alicdn.com/kf/UTB881JOhHPJXKJkSafSq6yqUXXat.jpg",
        createdAt: new Date("2007-02-28T10:30:00-0300"),
      },

      {
        title: "Amendoim",
        description: "Com casca e sem sal",
        price: 15.79,
        image:
          "https://s2.glbimg.com/F2LXcF8aTUXL-h7Bnmpk9LauZPE=/620x455/e.glbimg.com/og/ed/f/original/2016/09/06/thinkstockphotos-461261879.jpg",
        createdAt: new Date(),
      },
    ];
  },
};
</script>
