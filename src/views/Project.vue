<template>
    <div class="project">
        <Navigation v-bind:project_id="project" />
        <router-view ></router-view>
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
