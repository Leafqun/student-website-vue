<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style>
    body{
       background-image: url("http://119.23.22.99/static/bg_1.jpg");
    }
</style>
