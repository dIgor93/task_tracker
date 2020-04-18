<template>
    <div>
        <v-app>
            <v-card class="mx-auto" max-width="600" min-width="500" >
                <v-card-title>Выберите проект</v-card-title>
                <v-card-text>
                    <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                    ></v-text-field>
                    <v-data-table
                            @click:row="rowClick"
                            v-model="selected"
                            :search="search"
                            :headers="headers"
                            :items="items"
                            :single-select=true
                            item-key="id"
                            fixed-header
                    ></v-data-table>
                </v-card-text>
                <v-card-subtitle>
                    <v-btn v-bind:to="selectedId"
                           depressed
                           block
                           large
                           color="primary"
                    >Выбрать
                    </v-btn>
                </v-card-subtitle>
            </v-card>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: "SelectProj",
        methods: {
            rowClick: function (item, row) {
                row.select(true);
                this.selectedId = item.id.toString()
            }
        },
        data() {
            return {
                search: '',
                selected: [],
                selectedId: '',
                headers: [
                    {
                        text: 'ID',
                        value: 'id'
                    },
                    {
                        text: 'Название проекта',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    }
                ],
                items: [
                    {value: false, id: 123, name: 'Проект "Альфа"'},
                    {value: false, id: 321, name: 'Проект "Бетта"'},
                    {value: false, id: 232, name: 'Проект "Ганна"'},
                    {value: false, id: 320, name: 'Cupcake'},
                    {value: false, id: 112, name: 'Gingerbread'},
                    {value: false, id: 322, name: 'Jelly bean'},
                    {value: false, id: 231, name: 'Lollipop'},
                    {value: false, id: 745, name: 'Honeycomb'},
                    {value: false, id: 315, name: 'Donut'},
                    {value: false, id: 346, name: 'KitKat'},
                    {value: false, id: 234, name: 'Lollipop'},
                    {value: false, id: 235, name: 'Lollipop'},
                    {value: false, id: 236, name: 'Lollipop'},
                    {value: false, id: 237, name: 'Lollipop'},
                    {value: false, id: 238, name: 'Lollipop'},
                    {value: false, id: 239, name: 'Lollipop'},
                    {value: false, id: 230, name: 'Lollipop'},
                ],
            }
        }
    }
</script>

<style>
    tr.v-data-table__selected {
        background-color: var(--v-accent-lighten2) !important;
    }
</style>