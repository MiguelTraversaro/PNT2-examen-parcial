<template>

  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">

      <router-link to="/">
        <a href="" class="navbar-brand">Inicio</a>
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/gastos">
              <a href="" class="nav-link">Gastos</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/respuestas">
              <a href="" class="nav-link">Respuestas</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-navbar {

  }
</style>
