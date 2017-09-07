<template>
    <div>
        <div class="imgshow">
            <img src="./img/img1.gif">
        </div>
        <div class="contact">
            <div class="daohang">
                <Menu theme="light" :active-name="activeName" @on-select="selectMenu" style="height: 300px;">
                    <Menu-item name="International_College" style="font-size: 16px;">
                        International College
                    </Menu-item>
                    <Menu-item name="Academic_Affairs_Office" style="font-size: 16px;">
                        Dean's Office
                    </Menu-item>
                </Menu>
            </div>
            <div class="content">
                <div class="International_College" v-if="showWhat == 'International_College'">
                    <p style="font-size: 24px;"><strong>International College</strong></p>
                    <a href="http://www.gjxy.zjut.edu.cn/gjxy/index.html" style="font-size: 15px;">http://www.gjxy.zjut.edu.cn/gjxy/index.html</a>
                </div>
                <div class="Academic_Affairs_Office" v-if="showWhat == 'Academic_Affairs_Office'" style="font-size: 15px;">
                    <p style="font-size: 24px;"><strong>Dean's Office</strong></p></br>
                    <h4>信息学院教务处</h4>
                    <p>留学生教务秘书：许建凤</p>
                    <p>Tel：0571-85290371</p>
                    <p>Office：信息大楼1号楼 A524</p>
                    <p>Email:：Xujianfeng@zjut.edu.cn</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName:'allTables'
            }
        },
        computed:{
            showWhat(){
                let path = this.$route.path;
                let name = path.substring(path.lastIndexOf("/")+1);
                this.activeName = name;
                return name;
            }
        },
        methods:{
            selectMenu(val){
                this.activeName = val;
                console.log(val)
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
    .contact{
        overflow: hidden;
    }

    .daohang{
        float:left;
        text-align: center;
    }
    .content{
        float:left;
        padding-left:20px;
        width:740px;
        overflow: hidden;
        margin-top:10px;
    }
</style>