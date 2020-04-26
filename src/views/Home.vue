<template>
    <div>
        <v-app>
            <v-card class="mx-auto" max-width="600" min-width="500">
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
                    <router-link :to="{ name: 'main', path: 'main', params: {project: this.selectedId } }" tag='div'>
                        <v-btn
                                depressed
                                block
                                large
                                color="primary"
                        >Выбрать
                        </v-btn>
                    </router-link>
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
                this.selectedId = item.id.toString();
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

                ],
            }
        },
        mounted() {
            fetch('http://localhost:8000/projects',)
            .then(response => response.json())
            .then(json => {
                this.items = json
            })
        }
    }
</script>

<style>
    tr.v-data-table__selected {
        background-color: var(--v-accent-lighten2) !important;
    }
</style>