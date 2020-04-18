<template>
    <div class="project">
        <v-navigation-drawer absolute dark permanent>
            <v-list class="py-0">
                <v-list-item two-line :class="'px-3'">
                    <v-list-item-avatar>
                        <img src="../assets/01-6_86395.png">
                    </v-list-item-avatar>
                    <v-list-item-content align="left">
                        <v-list-item-title>{{ getProjectName(project_id, items) }}</v-list-item-title>
                        <v-list-item-subtitle>Описание проекта</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item
                        v-for="item in menu_items"
                        :key="item.name"
                        link
                        align="left"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-content class="py-0" style="margin-left: 256px">
            <v-container fluid fill-height>
                <v-card-title>Ресурсы</v-card-title>
                <v-divider></v-divider>
                <v-row>
                    <v-col>
                        <Requirements/>
                    </v-col>
                    <v-col>
                        <Tasks/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card>
                            <v-card-title>
                                Статистика
                            </v-card-title>
                            <v-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card>
                            <v-card-title>
                                Команда
                            </v-card-title>
                            <v-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    import Requirements from "../components/Requirements";
    import Tasks from "../components/Tasks";

    export default {
        name: "Proj",
        components: {Tasks, Requirements},
        methods: {
            getProjectName: function (id, arr) {
                return arr.filter((item) => {
                    return item.id.toString() === id.toString();
                })[0].name
            }
        },
        data() {
            return {
                project_id: this.$route.params.pathMatch,
                selected: [],
                selectedId: '',
                menu_items: [
                    {name: "Аналитика"},
                    {name: "Архитектура"},
                    {name: "Разработка"},
                    {name: "Тестирование"},
                    {name: "Сопровождение"},
                    {name: "Документы и ссылки"},
                ],
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
