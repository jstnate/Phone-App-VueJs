<template>
    <form @submit.prevent="addContact">
        <input type="text" name="contact-name" v-model="contactForm.name" placeholder="John DOE">
        <input type="text" name="contact-number" v-model="contactForm.number" placeholder="0606060606">
        <span v-if="this.contactForm.number.length != 10 && error">Le nom ne doit pas être vide et le numéro doit faire au moins 10 chiffres</span>
        <button type="submit">Ajouter</button>
    </form>
</template>
<script>
export default {
    name: 'AddContactForm',

    computed: {
        contacts() {
            return this.$store.state.contacts
        }
    },

    data() {
        return {
            error: false,
            contactForm: {
                name: '',
                number: ''
            }
        }
    },

    methods: {
        addContact() {
            if(this.contactForm.name == '' || this.contactForm.number == 'null' || this.contactForm.number.length != 10) {
                this.error = true
                return
            }
            this.$store.commit('addContactRequest', this.contactForm)
            this.contactForm = {
                name: '',
                number: ''
            }
            this.error = false
        },
    }


}
</script>
<style scoped>
    
</style>