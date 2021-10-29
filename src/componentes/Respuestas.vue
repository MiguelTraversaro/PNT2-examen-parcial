<template>

  <section class="src-componentes-respuestas">
    <div class="jumbotron">
      <h2>Respuestas</h2>
      <hr><hr><br>

      <div class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Número de pregunta</th>
            <th>Respuesta</th>
          </tr>
          <tr v-for="(pregunta,index) in preguntas" :key="index">
            <td>{{pregunta.numero}}</td>
            <td>{{pregunta.respuesta}}</td>
          </tr>
        </table>
      </div>      
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas : [
          { numero: 1, respuesta: ["b","e"] },
          { numero: 2, respuesta: ["c"] },
          { numero: 3, respuesta: ["b","e"] },
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron{
    background-color: rgb(66, 146, 66);
    color: white
  }
</style>
