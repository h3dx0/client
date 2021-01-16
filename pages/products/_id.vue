<template>
  <div>
    <div class="container">
      <div class="pictures">
        <img
          :src="`http://localhost:1337${product.images[0].url}`"
          class="card-img-top"
          alt="IMAGEN"
        />
        <nuxt-link :to="`http://localhost:1337${product.images[0].url}`"
          >Ver imagen más grande</nuxt-link
        >
      </div>
      <div class="info">
        <h1>{{ product.name }}</h1>
        <hr />
        <label class="price">
          <strong>${{ product.price }}</strong>
        </label>
        <p>{{ product.description }}</p>
        <hr />
        <label for="qty">Quiero</label>

        <div class="buy-info">
          <select name="qty" id="qty" class="form-control">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button class="btn btn-outline-info">Agregar al carro</button>
          <button class="btn btn-success">Comprar YA</button>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return { products: [] };
  },
  computed: {
    product() {
      const productId = this.$route.params.id;
      return this.$store.getters.getProductById(productId);
    },
  },
};
</script>

<style>
.info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
}
.price {
  font-size: 2rem;
}
.buy-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.buy-info > * {
  flex: 0 1 30%;
}
</style>