<template>
  <NuxtLayout>
  
  <main>
    <h1>Agenda</h1>

    <div class="create-new">
      <input 
        type="text" 
        v-model="newPersona" 
        placeholder="Nombre Persona" 
        @keypress.enter="addPersona" />
      <button @click="addPersona">Añadir</button>
    </div>

    <div class="tasks">
      <Task
        v-for="(persona, i) in $store.state.personas"
        :key="i"
        :persona="persona" />
    </div>

  </main>

  </NuxtLayout>
</template>

<script>
export default {
  data (){
    return {
      newPersona: ''
    }
  },
  methods: {
    addPersona () {
      if (this.newPersona) {
        this.$store.commit('ADD_PERSONA', this.newPersona);
        this.newPersona = '';
      }
    }
  }
}
</script>
