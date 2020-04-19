<template>
    <v-card min-height="310px">
        <v-card-title>
            Задачи
        </v-card-title>
        <v-card-text>
            <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="requirements"
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
        data() {
            return {
                selected: [],
                headers: [
                    {
                        text: 'ID',
                        value: 'id'
                    },
                    {
                        text: 'Наименование',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    }
                ],
                requirements: [
                    {value: false, id: 123342, name: 'Task Alpha Stage 1 Project Alpha'},
                    {value: false, id: 123332, name: 'Task Alpha Stage 2 Project Betta'},
                    {value: false, id: 123346, name: 'Task Alpha Stage 3 Project Gamma'},
                    {value: false, id: 123442, name: 'Task Alpha Stage 1 Project Alpha'},
                    {value: false, id: 123321, name: 'Task Alpha Stage 2 Project Betta'},
                    {value: false, id: 123344, name: 'Task Alpha Stage 3 Project Gamma'},
                ]
            }

        }
    }
</script>

<style scoped>
</style>