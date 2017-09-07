<template>
    <div class="main">
    <div class="pages">
        <div class="panel panel-default">
            <_header></_header>
            <div class="panel-body">
                <router-view></router-view>
            </div>
            <div>
                <_footer></_footer>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import _header from './header.vue'
    import _footer from './footer.vue'
    export default {
        data() {
            return {
                msg:null
            }
        },
        components:{
            _header,
            _footer
        }
    }
</script>

<style scoped>
    .pages {
        height: auto;
        width: 1052px;
        margin:20px auto 20px;
        background: rgb(255, 255, 255);
        opacity: 0.9;
        box-shadow: -2px 2px 10px #809bc8, 2px 0 10px #809bc8;
    }
    .panel {
        margin-bottom: 20px;
        background-color: #fff;
        border: 1px solid transparent;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    }
    .panel-body {
        padding: 15px;
    }
    .panel-heading {
        padding: 10px 15px;
        border-bottom: 1px solid transparent;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
    .panel-default {
        border-color: #ddd;
    }
</style>