<template>
    <v-content class="py-0" style="margin-left: 256px">
        <v-container fluid fill-height>
            <v-card width="100%" class="lighten-4 primary">
                <v-card-title>Ресурсы</v-card-title>
            </v-card>
            <v-form>
            <v-row>
                <v-col>

                    <v-list-item v-for="item in links" :key="item.link" dense>
                        <v-list-item-content>
                            <a v-bind:href="item.link">{{ item.link }}</a>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>
            <v-row>

                <v-col>
                    <v-file-input v-model="file" label="Выберите документ"></v-file-input>
                    <v-btn small @click="addLink(file.name)">Добавить документ</v-btn>
                </v-col>
                <v-col >
                    <v-text-field
                            v-model="label"
                            label="Ссылка"
                    ></v-text-field>
                    <v-btn small @click="addLink(label)">Добавить ссылку</v-btn>
                </v-col>

            </v-row>
            </v-form>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "Resources",
        components: { },
        data() {
            return {
                'selected': '',
                headers: [
                    {text: 'Наименование', value: 'link'}
                ],
                'label': '',
                'file':'',
                'links': [
                    {value: false, link: 'https://vuetifyjs.com/en/components/file-inputs/'},
                    {value: false, link: 'https://blog.heroku.com/container-registry-and-runtime'},
                    {
                        value: false,
                        link: 'https://stackoverflow.com/questions/4906977/how-to-access-environment-variable-values'
                    },
                ]
            }
        },
        methods: {
            addLink: function(text) {
                this.links.push({value: false, link: text});
            }
        }
    }
</script>

<style scoped>

</style>