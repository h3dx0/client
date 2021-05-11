<template>
  <div>
    <div>ORder</div>
    <table class="table table-striped table-bordered">
      <thead>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Precio</th>
      </thead>
      <tbody>
        <tr v-for="product in order.products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.qty }}</td>
          <td>{{ product.price }}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>TOTAL: ${{ order.total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "Order",
  data() {
    return {};
  },
  computed: {
    order() {
      return this.$store.state.order;
    },
  },
};
</script>


<style>
</style>