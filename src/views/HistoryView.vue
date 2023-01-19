<template>
    <div v-for="call in history" :key="call.name">
        <div class="call">
            <span v-if="call.name != ''">{{ call.name }}</span>
            <span>{{ call.number }}</span>
            <span>{{ call.date }}</span>
            <button @click="callNumber(call.name, call.number)">Appeler</button>
        </div>
    </div>
</template>

<script>
  // @ is an alias to /src
    export default {
        name: 'HistoryView',
        
        data() {
            return {
                currentCall: {
                    name: '',
                    number: '',
                    date: null,
                },
            }
        },

        computed: {
            history() {
                return this.$store.state.history
            }
        },

        methods: {
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
            }
        }

    }
</script>