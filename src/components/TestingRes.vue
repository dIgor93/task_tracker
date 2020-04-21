<template>
    <v-content class="py-0" style="margin-left: 256px">
        <v-container fluid fill-height>
            <v-card width="100%" class="lighten-4 primary">
                <v-card-title>Ресурсы</v-card-title>
            </v-card>
            <v-tabs v-model="tab" background-color="transparent" color="basil" grow >
                <v-tab v-for="item in testings" :key="item.id" >
                    {{ item.name }}
                </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <v-tab-item v-for="item in testings" :key="item.id" >
                    <v-content class="py-0">
                        <v-container fluid fill-height>
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
                                    <Statistic/>
                                </v-col>
                                <v-col>
                                    <Comand/>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-content>
                </v-tab-item>
            </v-tabs-items>
        </v-container>
    </v-content>
</template>

<script>
    import Requirements from "./resources/Requirements";
    import Tasks from "./resources/Tasks";
    import Statistic from "./resources/Statistic";
    import Comand from "./resources/Comand";
    export default {
        name: "Testing",
        components: {Comand, Statistic, Tasks, Requirements},
        data() {
            return {
                tab: null,
                testings: [
                    {id: 1, name: 'Функциональное'},
                    {id: 2, name: 'Регрессионное'},
                    {id: 3, name: 'и др'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>