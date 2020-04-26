<template>
    <div class="project">
        <Navigation v-bind:project_id="project" />
        <router-view v-bind:project_id="project" ></router-view>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation";
    export default {
        name: "Project",
        components: { Navigation },
        props: ['project'],
        data() {
            return {
                selected: [],
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
            }
        }
    }
</script>
