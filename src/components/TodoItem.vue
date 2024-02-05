<template>
    <div class="list-item">
        <label for="title">
            <input type="text" readonly :value="task.title" id="title" name="title" />
        </label>
    </div>
</template>
<script>
export default {
    name: 'TodoItem',
    props: {
        task: {
            type: Object,
            required: true,
            default: () => ({ id: '', state: '', title: '' }),
            validator: (task) => ['id', 'state', 'title'].every((key) => key in task)
        }
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>