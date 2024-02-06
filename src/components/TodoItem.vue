<template>
    <div :class="classes">
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
    emits:['archive-task','pin-task'],
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        archiveTask(){
            this.$emit('archive-task',this.task.id);
        },
        pinTask(){
            this.$emit('pin-task',this.task.id);
        }
    },

    computed:{
        classes(){
            if(this.task.state === 'TASK_INBOX'){
                return 'list-item TASK_INBOX';
            }
            else if (this.task.state === 'TASK_PINNED') {
                return 'list-item TASK_PINNED';
            }
            else if (this.task.state === 'TASK_ARCHIVED') {
                return 'list-item TASK_ARCHIVED';
            }
            return ''
        },
        isChecked(){
            if(this.task.state === 'TASK_ARCHIVED') return true;
            return false;
        }
    }
};
</script>