export const state = () => ({
	personas: []
})

export const mutations = {
	ADD_PERSONA(state, persona) {
		state.personas = [{ content: persona, done: false }, ...state.personas];
	},
	REMOVE_PERSONA(state, persona) {
		state.personas.splice(state.personas.indexOf(persona), 1);
	}
}