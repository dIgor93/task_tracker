<template>
    <v-card min-height="380px">
        <v-card-title>
            График
        </v-card-title>
        <v-card-text >
            <vc-donut  background="white" foreground="grey"
                       :size="210" unit="px" :thickness="50"
                       hasLegend legendPlacement="top"
                       :sections="sections" :total="100"
            ></vc-donut>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Statistic",
        props: ['data'],
        data() {
            return {
                sections: []
            }
        },
        mounted() {
            fetch(`https://traker-api-app.herokuapp.com/resources/${this.data.project}/statistic/${this.data.group}`)
                .then(response => response.json())
                .then(json => {
                    this.sections = json
                })
        }
    }
</script>

<style scoped>

</style>