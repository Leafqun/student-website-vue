<template>
    <div>
        <div class="imgshow">
            <img src="./img/img2.gif">
        </div>
        <div class="course">
            <div class="daohang">
                <Menu theme="light" :active-name="activeName" @on-select="selectMenu" style="height: 300px;">
                    <Menu-item name="outline" class="items">
                        Course Outline
                    </Menu-item>
                    <Menu-item name="arrangement" class="items">
                        Arrangement
                    </Menu-item>
                    <Menu-item name="materials" class="items">
                        Documents
                    </Menu-item>
                    <Menu-item name="videos" class="items">
                        Videos
                    </Menu-item>
                </Menu>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName:'outline'
            }
        },
        created(){
            this.getActiveName();
        },
        methods:{
            getActiveName(){
                let name = this.$route.path;
                this.activeName = name.substring(name.lastIndexOf("/")+1);
            },
            selectMenu(val) {
                this.activeName = val;
                this.$router.push({name:val});
            }
        }
    }
</script>

<style scoped>
    .imgshow {
        width: 100%;
        margin: 20px auto 10px;
        text-align: center;
    }
    .course{
        overflow: hidden;
    }

    .daohang{
        float:left;
        text-align: center;
    }
    .items{
        font-size: 16px;
    }
    .content{
        float:left;
        padding-left:20px;
        margin-left:20px;
        width:740px;
        margin-top:15px;
    }
</style>