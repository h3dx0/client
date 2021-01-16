<template>
  <div>
    <div class="row d-none d-sm-block mb-3">
      <div class="col-12">
        <div class="slider">
          <div class="content">
            <h1><b>¡No pierdas tiempo buscando como salir de VIM!</b></h1>
            <p>
              En DEVTHINGS encontrarás artículos que usas diariamente como esa
              taza de café o nuestro mousepad pero que esta vez te van a ayudar
              a ahorrar tiempo.
            </p>
            <h4><b>¿COMO?</b></h4>
            <p>
              Pues esa taza de café te dirá como hacer un commit en git o como
              crear una base datos, un usuario y como darle permisos.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="row">
        <div class="col-6 mx-auto text-center">
          <h2><strong>Bienvenido a DEVTHINGS</strong></h2>
          <p>
            <b
              >DevThings es un stio creado por un desarrollador para
              desarrolladores.</b
            >
            Me cansé de buscar articulos divertidos para nosotros sin tener que
            pagar altos costos de envío. Además de <b>perder tiempo</b>
            buscando los mismos comandos o procedimientos cada día. Hasta que un
            día vi mi taza de café y fue cuando todo hizo clic.
            <b>¡AQUi voy a tener mis comandos de VIM :) !</b>
            Así nació esta idea de tener nuestras tareas repetidas en
            <b>artículos de uso diario</b> y algunos no tan usados pero que nos
            hagan el día divertido.
          </p>
          <p>
            Si quieres saber más de mi, pásate por mi sitio personal dando clic
            <a href="http://robertonunezc.com" target="_blank"> aquí.</a>
          </p>
          <hr />
        </div>
        <div class="col-12">
          <h1 class="text-center text-bold mb-5 mt-5">Productos</h1>
        </div>
        <div class="col-md-3" v-for="product in products" :key="product.code">
          <div class="card">
            <img
              :src="`http://localhost:1337${product.images[0].url}`"
              class="card-img-top"
              alt
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">${{ product.price }}</p>
              <nuxt-link
                class="btn btn-success"
                :to="{ name: 'products-id', params: { id: product.id } }"
                >La quiero</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  created() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style>
.slider {
  padding: 1em 3em;
  width: 100%;
  height: 50vh;
  background-image: url("/img/slider.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 2em;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-top: 3em;
}
</style>