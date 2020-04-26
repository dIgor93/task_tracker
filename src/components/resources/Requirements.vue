<template>
    <v-card min-height="310px">
        <v-card-title>
            Требования
        </v-card-title>
        <v-card-text>
            <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="requirements"
                    item-key="id"
                    height="50%"
                    dense
                    items-per-page="5"
                    :footer-props="{ 'items-per-page-options': [5, 10, 15, -1],
                           'items-per-page-text': 'Элементов на странице:',
                           'items-per-page-all-text': 'Все'}"
            ></v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Requirements",
        props: ['data'],
        data() {
            return {
                selected: [],
                headers: [
                    { text: 'ID', value: 'id' },
                    { text: 'Наименование', value: 'name'}
                ],
                requirements: []
            }
        },
        mounted() {
            fetch(`http://localhost:8000/resources/${this.data.project}/requirements/${this.data.group}`)
                .then(response => response.json())
                .then(json => {
                    this.requirements = json
                })
        }
    }
</script>

<style scoped>

</style>