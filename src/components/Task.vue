<template>
	<div :class="`task ${persona.done ? 'is-complete' : ''}`">
		<div class="content">{{ persona.content }}</div>
		<div class="buttons">
			<button @click="removePersona" class="delete">Borrar</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['persona'],
	methods: {
		removePersona() {
			this.$store.commit('REMOVE_PERSONA', this.persona);
		}
	}
}
</script>

<style>

</style>