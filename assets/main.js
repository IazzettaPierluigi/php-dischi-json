const { createApp } = Vue

createApp({
    data() {
        return {

            apiUrl: 'server.php',
            diskList: []
        }
    },
    mounted() {
        this.disksCall()
    },
    methods: {
        disksCall() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.diskList = response.data
                })
        }
    },
}).mount('#app')