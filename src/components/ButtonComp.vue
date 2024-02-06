<template>
    <button @click="btnClick">{{ btnname }}</button>
</template>
<script>
export default {
    name: 'ButtonComp',
    emits:['btn-click'],
    props:{
        btnname:{
            type:String,
            default:'버튼',
            required:false
        }
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        btnClick(){
            this.$emit('btn-click')
        }
    },
};
</script>