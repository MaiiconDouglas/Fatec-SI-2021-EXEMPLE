<template>
  <main>
    <Menu />

    <h1>Cadastro de produtos</h1>

    <form novalidate @submit.prevent="onSubmit">
      <input v-model.trim="title" placeholder="Título" />
      <input v-model.trim="description" placeholder="Descrição" />
      <input type="number" v-model.number="price" placeholder="Preço" />
      <input
        type="file"
        placeholder="Imagem"
        accept="image/jpeg,image/png"
        @change="onFileChange"
      />

      <button>Adicionar</button>
    </form>

    <table v-if="products && products.length > 0">
      <thead>
        <tr>
          <th>Título</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Imagem</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item of products" :key="item.title">
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.price }}</td>
          <td>
            <img :src="item.image" height="40" />
          </td>
          <td>
            <button @click="onDelete(item)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      title: "",
      description: "",
      price: "",
      image: "",
    };
  },

  mounted() {
    this.products = JSON.parse(localStorage.getItem("products"));
  },

  methods: {
    onSubmit() {
      this.products.push({
        title: this.title,
        description: this.description,
        price: this.price,
        image: this.image,
      });

      this.title = "";
      this.description = "";
      this.price = "";
      this.image = "";

      localStorage.setItem("products", JSON.stringify(this.products));
    },

    onDelete(item) {
      this.products = this.products.filter(
        (product) => product.title !== item.title
      );

      localStorage.setItem("products", JSON.stringify(this.products));
    },

    onFileChange(event) {
      const reader = new FileReader();
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => (this.image = reader.result);
    },
  },
};
</script>
