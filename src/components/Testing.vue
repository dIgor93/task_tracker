<template>
    <div>
    <v-tabs
            v-model="tab"
            background-color="transparent"
            color="basil"
            grow
    >
        <v-tab
                v-for="item in testings"
                :key="item"
        >
            {{ item }}
        </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
        <v-tab-item
                v-for="item in items"
                :key="item"
        >
            <v-card
                    color="basil"
                    flat
            >
                <v-card-text>sdfgsdfgsdfger</v-card-text>
            </v-card>
        </v-tab-item>
    </v-tabs-items>
    </div>
</template>

<script>
    export default {
        name: "Testing",
        data() {
            return {
                testings: [
                    {item: 'Функциональное'},
                    {item: 'Регрессионное'},
                    {item: 'и др'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>