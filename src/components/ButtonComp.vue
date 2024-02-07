<template>
    <button class="common_btn" @click="customClick">{{ btnname }}</button>
</template>
<script>
export default {
    name: 'ButtonComp',
    emits:['btn-click','custom-click'],
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
        clicked(){
            this.customClick();
        },
        customClick(event){
            this.$emit('custom-click', event);
        }
    },
};
</script>
<style scoped>
.common_btn{
    padding: 10px;
    background-color: var(--primary);
    color: var(--light);
    line-height: 1.2;
    border: none;
    border-radius: 25px;
    cursor: pointer;
}
</style>