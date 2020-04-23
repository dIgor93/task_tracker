<template>
    <v-content class="py-0" style="margin-left: 256px">
        <v-container fluid fill-height>
            <v-card width="100%" class="lighten-4 primary">
                <v-card-title>Ресурсы</v-card-title>
            </v-card>
            <v-row>
                <v-col>
                    <Requirements v-bind:data="{project:project_id, group:'support'}"/>
                </v-col>
                <v-col>
                    <Tasks v-bind:data="{project:project_id, group:'support'}"/>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <Statistic v-bind:data="{project:project_id, group:'support'}"/>
                </v-col>
                <v-col>
                    <Comand v-bind:data="{project:project_id, group:'support'}"/>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import Comand from "./resources/Comand";
    import Tasks from "./resources/Tasks";
    import Requirements from "./resources/Requirements";
    import Statistic from "./resources/Statistic";

    export default {
        name: "Resources",
        components: {Statistic, Comand, Tasks, Requirements},
        props: ['project_id']
    }
</script>

<style scoped>

</style>