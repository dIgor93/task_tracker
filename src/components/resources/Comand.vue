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
        data() {
            return {
                selected: [],
                headers: [
                    {
                        text: 'ID',
                        value: 'id'
                    },
                    {
                        text: 'ФИО',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    {
                        text: 'Должность',
                        align: 'left',
                        sortable: false,
                        value: 'role',
                    }
                ],
                employers: [
                    {value: false, id: 3342, name: 'А. С. Пушкин ', role: 'Руководитель проектов'},
                    {value: false, id: 3332, name: 'Л. Н. Толстой ', role: 'Тимлид'},
                    {value: false, id: 3346, name: 'М. Горький ', role: 'Ведущий разработчик'},
                    {value: false, id: 3442, name: 'А. П. Чехов ', role: 'Старший разработчик'},
                    {value: false, id: 3321, name: 'А. Н. Толстой ', role: 'Старший разработчик'},
                    {value: false, id: 3344, name: 'Н. В. Гоголь ', role: 'Разработчик'},
                    {value: false, id: 3344, name: 'А. А. Блок ', role: 'Тестировщик'},
                    {value: false, id: 3344, name: 'Б. Л. Пастернак ', role: 'Интегратор'},

                ]
            }

        }
    }
</script>

<style scoped>

</style>