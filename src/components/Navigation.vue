<template>
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
            <v-list-item-group active-class="primary">
                <v-list-item
                        v-for="item in menu_items"
                        :key="item.name"
                        link
                        align="left"
                >
                    <v-list-item-content>

                        <router-link :to=project_id+item.ref replace>
                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                        </router-link>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Navigation",

        methods: {
            getProjectName: function (id, arr) {
                console.log(id)
                return arr.filter((item) => {
                    return item.id.toString() === id.toString();
                })[0].name
            }
        },
        data() {
            return {
                project_id: this.$route.params.project,
                test_route: this.project_id + '/testing',
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
                menu_items: [
                    {name: "Аналитика", ref: "/analysis"},
                    {name: "Архитектура", ref: "/architecture"},
                    {name: "Разработка", ref: "/development"},
                    {name: "Тестирование", ref: "/testing"},
                    {name: "Сопровождение", ref: "/support"},
                    {name: "Документы и ссылки", ref: "/docs"},
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

<style scoped>

</style>