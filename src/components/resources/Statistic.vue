<template>
    <v-card min-height="380px">
        <v-card-title>
            График
        </v-card-title>
        <v-card-text >
            <vc-donut  background="white" foreground="grey"
                       :size="210" unit="px" :thickness="50"
                       hasLegend legendPlacement="top"
                       :sections="sections" :total="100"
            ></vc-donut>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Statistic",
        data() {
            return {
                sections: [{ label: 'Active', value: 15, color: 'blue' },
                    { label: 'Proposed', value: 25, color: 'orange' },
                    { label: 'Resolve', value: 40, color: 'green' },
                    { label: 'Closed', value: 20, color: 'gray' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>