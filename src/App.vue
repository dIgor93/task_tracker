<template>
    <div id="app">
        <v-app id="inspire">
            <v-app-bar
                    app
                    color="primary"
                    dark
                    clipped-left
            >
                <v-icon medium left>mdi-domain</v-icon>
                <v-toolbar-title>{{ title }}</v-toolbar-title>
            </v-app-bar>
            <v-content>
                <v-container fill-height fluid>
                    <v-layout
                            justify-space-between
                            align-start
                    >
                        <v-flex>
                            <router-view/>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {},
        data() {
            return {
                title: 'Управление проектами'
            }
        }
    };
</script>
