<template>
    <v-card>
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
                    items-per-page="4"
            ></v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Requirements",
        data() {
            return {
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
                    {value: false, id: 123342, name: 'Requirement Alpha Stage 1 Project Alpha'},
                    {value: false, id: 123332, name: 'Requirement Alpha Stage 2 Project Betta'},
                    {value: false, id: 123346, name: 'Requirement Alpha Stage 3 Project Gamma'},
                    {value: false, id: 123442, name: 'Requirement Alpha Stage 1 Project Alpha'},
                    {value: false, id: 123321, name: 'Requirement Alpha Stage 2 Project Betta'},
                    {value: false, id: 123344, name: 'Requirement Alpha Stage 3 Project Gamma'},
                ]
            }

        }
    }
</script>

<style scoped>

</style>