<template>
    <div>
        <v-navigation-drawer absolute dark permanent v-model="drawer">
            <v-list class="py-0">
                <v-list-item two-line :class="'px-3'">
                    <v-list-item-avatar>
                        <img src="../assets/01-6_86395.png">
                    </v-list-item-avatar>
                    <v-list-item-content align="left">
                        <v-list-item-title>{{ getProjectName(project_id, items) }}</v-list-item-title>
                        <v-list-item-subtitle>{{ project_id }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item-group active-class="primary">
                    <v-list-item
                            v-for="(item) in menu_items"
                            :key="item.name"
                            link
                            align="left"
                    >
                        <v-list-item-content @click="goto(item.ref)">
                                <v-list-item-title>{{ item.name }}</v-list-item-title>
                                <v-list-item-subtitle>{{ item.id }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

    </div>
</template>

<script>
    export default {
        name: "Navigation",
        props: ['project_id'],
        methods: {
            getProjectName: function (id, arr) {
                return arr.filter((item) => {
                    return item.id.toString() === id.toString();
                })[0].name
            },
            goto: function (theme) {
                this.$router.push(`/main/${this.project_id}${theme}`);
            }
        },
        data() {
            return {
                selected: [],
                project: this.project_id,
                menu_items: [
                    {name: "Аналитика", ref: "/analysis"},
                    {name: "Архитектура", ref: "/architecture"},
                    {name: "Разработка", ref: "/development"},
                    {name: "Тестирование", ref: "/testing"},
                    {name: "Сопровождение", ref: "/support"},
                    {name: "Документы и ссылки", ref: "/docs"},
                ],
                items: [],
            }
        },
        mounted() {
            fetch('https://traker-api-app.herokuapp.com/projects',)
                .then(response => response.json())
                .then(json => {
                    this.items = json
                })
        }
    }
</script>

<style scoped>

</style>