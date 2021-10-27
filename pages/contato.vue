<template>
  <main>
    <Menu />

    <form @submit.prevent="send">
      <div>
        <input
          v-model="$v.email.$model"
          placeholder="E-mail"
          :class="{ error: $v.email.$error }"
        />
        <p v-if="$v.email.$error" class="error">Informe um e-mail válido!</p>
      </div>

      <div>
        <input
          v-model="$v.subject.$model"
          placeholder="Assunto"
          :class="{ error: $v.subject.$error }"
        />
        <p v-if="$v.subject.$error" class="error">Informe um assunto válido!</p>
      </div>

      <div>
        <textarea
          v-model="$v.message.$model"
          cols="30"
          rows="10"
          :class="{ error: $v.message.$error }"
        />
        <p v-if="$v.message.$error" class="error">
          Informe uma mensagem válida!
        </p>
      </div>

      <button type="submit" :disabled="$v.$error">Enviar</button>
    </form>

    <p>{{ result }}</p>
  </main>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  data() {
    return {
      email: "",
      subject: "",
      message: "",
      result: "",
    };
  },

  validations: {
    email: { required, email },
    subject: { required, minLength: minLength(10) },
    message: { required, minLength: minLength(50) },
  },

  methods: {
    send() {
      this.result = "";

      this.$v.$touch();
      if (this.$v.$invalid) return;

      this.result = "Viva, enviou!";
      this.email = "";
      this.subject = "";
      this.message = "";
      this.$v.$reset();
    },
  },
};
</script>

<style scoped>
input,
textarea {
  outline: none;
  border: 1px solid #ccc;
}

input.error,
textarea.error {
  border: 1px solid red;
}

p.error {
  color: red;
}
</style>
