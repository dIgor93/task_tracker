<template>
    <v-card min-height="310px">
        <v-card-title>
            Задачи
        </v-card-title>
        <v-card-text>
            <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="tasks"
                    item-key="id"
                    height="50%"
                    items-per-page="5"
                    :footer-props="{ 'items-per-page-options': [5, 10, 15, -1],
                           'items-per-page-text': 'Элементов на странице:',
                           'items-per-page-all-text': 'Все'}"
                    dense
            ></v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Tasks",
        props: ['data'],
        data() {
            return {
                selected: [],
                headers: [
                    { text: 'ID', value: 'id' },
                    { text: 'Наименование', value: 'name' },
                    { text: 'Статус', value: 'status' }
                ],
                tasks: []
            }
        },
        mounted() {
            fetch(`https://traker-api-app.herokuapp.com/resources/${this.data.project}/tasks/${this.data.group}`)
                .then(response => response.json())
                .then(json => {
                    this.tasks = json
                })
        }
    }
</script>

<style scoped>
</style>