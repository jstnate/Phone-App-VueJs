<template lang="">
    <div>
        <span>{{ currentNumber}}</span>
        <span>{{ contactName }}</span>
    </div>
    <div>
        <KeypadKey @click="keyupKey(i-1)" v-for="i in 10" :key="i" :value="i-1"/>
        <button @click="callNumber()">Appeler</button>
    </div>
</template>
<script>
import KeypadKey from '@/components/KeypadKey.vue';
export default {
    name: 'KeypadView',

    data() {
        return {
            currentNumber: '',
            contactName: '',

            currentCall: {
                name: '',
                number: '',
                date: null,
            },
        }
    },

    computed: {
        contacts() {
            return this.$store.state.contacts
        }
    },

    components: {
        KeypadKey,
    },

    methods: {
        keyupKey(number) {
            this.currentNumber.length < 11 ? this.currentNumber += number : this.currentNumber

            if (this.contacts.find(contact => this.currentNumber == contact.number)) {
                this.contactName = this.contacts.find(contact => this.currentNumber == contact.number).name
            }
        },

        callNumber() {
            let currentDate = new Date()
            let currentDay = currentDate.getDate()
            let theMonth = currentDate.getMonth()
            let currentMonth
            theMonth < 10 ? currentMonth = '0' + (theMonth + 1) : currentMonth = theMonth
            let currentHour = currentDate.getHours()
            let currentMinute = currentDate.getMinutes() 

            this.currentCall = {
                name: this.contactName,
                number: this.currentNumber,
                date: currentDay + '/' + currentMonth + ' ' + currentHour + ':' + currentMinute
            }
            this.$store.commit('addCall', this.currentCall)
            this.$router.push('/history')
        }
    }
}
</script>
<style scoped>
    
</style>