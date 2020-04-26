<template>
    <v-card min-height="380px">
        <v-card-title>
            Команда
        </v-card-title>
        <v-card-text>
            <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="employers"
                    item-key="id"
                    height="50%"
                    items-per-page="4"
                    :footer-props="{ 'items-per-page-options': [4, 8, 12, -1],
                           'items-per-page-text': 'Элементов на странице:',
                           'items-per-page-all-text': 'Все'}"
            ></v-data-table>

        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Comand",
        props: ['data'],
        data() {
            return {
                selected: [],
                headers: [
                    { text: 'ID', value: 'id' },
                    { text: 'ФИО', value: 'name' },
                    { text: 'Должность', value: 'role' }
                ],
                employers: []
            }
        },
        mounted() {
            fetch(`https://traker-api-app.herokuapp.com/resources/${this.data.project}/command/${this.data.group}`)
                .then(response => response.json())
                .then(json => {
                    this.employers = json
                })
        }
    }
</script>

<style scoped>

</style>