<template>
  <button @click="showForm">Ajouter un utilisateur</button>
  <div v-if="displayForm" id="show-form">
    <AddContactForm />
  </div>
  <div v-for="contact in contacts" :key="contact.name" class="contact">
    <h2>{{ contact.name }}</h2>
    <span>{{ contact.number }}</span>
    <button @click="callNumber(contact.name, contact.number)">Appeler</button>
  </div>
</template>

<script>
import AddContactForm from '@/components/AddContactForm.vue';
export default {
  name: 'ContactView',

  components: {
    AddContactForm,
  },
  
  computed: {
    contacts() {
      return this.$store.state.contacts
    }
  },

  data() {
    return {
      displayForm: false,
      currentCall: {
          name: '',
          number: '',
          date: null,
      },
    }
  },

  methods: {
    showForm() {
      this.displayForm == false ? this.displayForm = true : this.displayForm = false
    },

    callNumber(name, number) {
      let currentDate = new Date()
      let currentDay = currentDate.getDate()
      let theMonth = currentDate.getMonth()
      let currentMonth
      theMonth < 10 ? currentMonth = '0' + (theMonth + 1) : currentMonth = theMonth
      let currentHour = currentDate.getHours()
      let currentMinute = currentDate.getMinutes()

      this.currentCall = {
          name: name,
          number: number,
          date: currentDay + '/' + currentMonth + ' ' + currentHour + ':' + currentMinute
      }

      this.$store.commit('addCall', this.currentCall)
      this.$router.push('/history')
    }
  }
}
</script>
