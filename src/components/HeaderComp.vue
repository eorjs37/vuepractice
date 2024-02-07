<template>
    <header class="header_container">
        <nav class="nav">
            <ul class="menu">
                <li>
                    {{ isTest }}
                </li>
                <li class="menu_right">
                    <button @click="btn1Click">버튼1</button>
                    <button @click="btn2Click">버튼2</button>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'HeaderComp',

    data() {
        return {
            isTest:false
        };
    },

    mounted() {
        
    },

    methods: {
        btn1Click() { 
            this.isTest = !this.isTest
        },
        btn2Click() { },
    },
};
</script>
<style scoped src="@/assets/styles/header.css"></style>