import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        name: 'Gérard',
        number: '0808080808'
      },
      {
        name: 'Sylvie',
        number: '0707070707'
      },
      {
        name: 'Estéban',
        number: '0606060606'
      }
    ],

    history: [
      
    ]
  },
  getters: {
  },
  mutations: {
    addContactRequest(state, contact) {
      state.contacts.push(contact)
    },

    addCall(state, call) {
      state.history.push(call)
    }
  },
  actions: {
  },
  modules: {
  }
})
