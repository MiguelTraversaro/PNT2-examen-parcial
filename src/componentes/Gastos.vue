<template>

  <section class="src-componentes-gastos">
    <div class="jumbotron">
      <h2>Gastos</h2>
      <hr><hr><br>

      <vue-form :state="formState" @submit.prevent="enviar()">
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            name="nombre"
            v-model.trim="formData.nombre"
            autocomplete="off"
            required
            :minlength="minNombre"
            :maxlength="maxNombre"
            no-espacios
            class="form-control"
            >
            <field-messages name="nombre" show="$dirty">
              <div slot="required" class="alert alert-danger">
                Campo obligatorio
              </div>
              <div slot="minlength" class="alert alert-danger">
                Mínimo {{ minNombre }} caracteres
              </div>
              <div v-if="formData.nombre.length == maxNombre" class="alert alert-danger">
                Máximo {{ maxNombre }} caracteres
              </div>
              <div slot="no-espacios" class="alert alert-danger">
                No se permiten espacios intermedios
              </div>
            </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label for="detalle">Detalle</label>
          <input 
            type="text"
            id="detalle"
            name="detalle"
            v-model.trim="formData.detalle"
            autocomplete="off"
            required
            class="form-control"
            >
            <field-messages name="detalle" show="$dirty">
              <div slot="required" class="alert alert-danger">
                Campo obligatorio
              </div>
            </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label for="importe">Importe</label>
          <input 
            type="number"
            id="importe"
            name="importe"
            v-model="formData.importe"
            autocomplete="off"
            required
            class="form-control"
            >
            <field-messages name="importe" show="$dirty">
              <div slot="required" class="alert alert-danger">
                Campo obligatorio
              </div>
            </field-messages>
        </validate>
 
        <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Enviar</button>
      
      </vue-form>
      
      <div class="">
        <label for="presupuesto">Presupuesto</label>
        <input 
          type="number"
          id="presupuesto"
          name="presupuesto"
          v-model="presupuesto"
          autocomplete="off"
          class="form-control"
          >
      </div>

      <div v-if="gastos.length" class="table table-responsive mt-4">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Detalle</th>
            <th>Importe</th>
            <th>Fecha</th>
          </tr>
          <tr v-for="(gasto,index) in gastos" :key="index">
            <td>{{gasto.nombre}}</td>
            <td>{{gasto.detalle}}</td>
            <td>${{gasto.importe}}</td>
            <td>{{gasto.fecha}}</td>
          </tr>
          <tr :style="{color: calcularColor()}">
            <td>Gasto total:</td>
            <td></td>
            <td>${{gastoTotal}}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-gastos',
    props: [],
    mounted () {

    },
    data () {
      return {
        formData: this.getInitialData(),
        formState: {},
        minNombre: 3,
        maxNombre: 15,
        gastos: [],
        minImporte: 1000,
        maxImporte: 5000,
        gastoTotal: 0,
        presupuesto: null,
      }
    },
    methods: {
      getInitialData(){
        return{
          nombre: "",
          detalle: "",
          importe: "",
        }
      },
      enviar(){
        let gasto = {...this.formData}
        console.log(gasto)
        this.gastoTotal += parseInt(gasto.importe)
        gasto.fecha = new Date().toLocaleString()
        this.gastos.push(gasto)
        this.formData = this.getInitialData()
        this.formState._reset()
      },
      calcularColor(){
        let color = "orange"
        if(this.gastoTotal<this.minImporte) color = "lightgreen"
        if(this.minImporte<=this.gastoTotal && this.gastoTotal<=this.maxImporte) color = "magenta"
        if(this.presupuesto<this.gastoTotal && this.presupuesto!==null) color = "red"
        return color
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron{
    background-color: rgb(135, 96, 172);
    color: white;
  }
</style>
