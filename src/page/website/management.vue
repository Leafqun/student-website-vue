<template>
    <div>
        <div class="imgshow">
            <img src="./img/img3.gif">
        </div>
        <div class="management">
            <div class="daohang">
                <Menu theme="light" :active-name="activeName" @on-select="selectMenu" style="height: 300px;">
                    <Menu-item name="handbook" style="font-size: 16px;">
                        Handbooks
                    </Menu-item>
                    <Menu-item name="process" style="font-size: 16px;">
                        Processes
                    </Menu-item>
                    <Menu-item name="requirements" style="font-size: 16px;">
                        Graduation Requirements
                    </Menu-item>
                    <Submenu name="information" style="font-size: 16px;margin-left:16px;">
                        <template slot="title">
                            Precautions
                        </template>
                        <Menu-item name="gradeCaculation" style="font-size: 12px;text-align:left;">Grade point calculation</Menu-item>
                        <Menu-item name="tips" style="font-size: 12px;text-align:left;">Warm Tips on Applications about Registration</Menu-item>
                    </Submenu>
                </Menu>
            </div>
            <div class="content">
                <div class="stu_handbook" v-if="showWhat == 'handbook'">
                    <p style="font-size: 24px;">Handbooks</p>
                    <p style="font-size: 16px;"><a href="http://119.23.22.99/static/manage/%7f%e6%b5%99%e6%b1%9f%e5%b7%a5%e4%b8%9a%e5%a4%a7%e5%ad%a6%e5%85%a8%e6%97%a5%e5%88%b6%e6%9c%ac%e7%a7%91%e7%95%99%e5%ad%a6%e7%94%9f%e5%ad%a6%e7%b1%8d%e7%ae%a1%e7%90%86%e5%ae%9e%e6%96%bd%e7%bb%86%e5%88%99-%e4%b8%ad%e8%8b%b1%e5%af%b9%e7%85%a7%e7%89%88%ef%bc%88%e7%bb%88%e7%a8%bf%ef%bc%89.pdf">浙江工业大学全日制本科留学生学籍管理实施细则-中英对照版（终稿）.pdf</a>
                    </p>
                </div>
                <div class="process" v-if="showWhat == 'process'">
                    <p style="font-size: 24px;">Processes</p>
                    <p style="font-size: 16px;"><a href="http://119.23.22.99/static/manage/%7f%e6%b5%99%e6%b1%9f%e5%b7%a5%e4%b8%9a%e5%a4%a7%e5%ad%a6%e5%85%a8%e6%97%a5%e5%88%b6%e6%9c%ac%e7%a7%91%e7%95%99%e5%ad%a6%e7%94%9f%e5%ad%a6%e7%b1%8d%e7%ae%a1%e7%90%86%e5%ae%9e%e6%96%bd%e7%bb%86%e5%88%99-%e4%b8%ad%e8%8b%b1%e5%af%b9%e7%85%a7%e7%89%88%ef%bc%88%e7%bb%88%e7%a8%bf%ef%bc%89.pdf">浙江工业大学全日制本科留学生学籍管理实施细则-中英对照版（终稿）.pdf</a>
                    </p>
                </div>
                <div class="graduation_requirements" v-if="showWhat == 'requirements'" style="font-family: 'Times New Roman'">
                    <p style="font-size: 24px;">Graduation Requirements</p>
                    <div v-html="management.requirements"></div>
                </div>
                <div class="gradeCaculation" v-if="showWhat == 'gradeCaculation'">
                    <p style="font-size: 24px;">绩点计算example</p>
                    <div v-html="management.gpc"></div>
                </div>
                <div class="tips" v-if="showWhat == 'tips'">
                    <p style="font-size: 24px;">Warm Tips on Applications about Registration</p>
                    <div v-html="management.tips">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName:'handbook',
                management:{
                    mId:null,
                    handbooks:'',
                    processes:'',
                    requirements:'',
                    gpc:'',
                    tips:''
                }
            }
        },
        created() {
            this.fetchData();
        },
        watch: {
            '$route': 'fetchData'
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
            fetchData() {
                let _self = this;
                this.axios.get(this.url + "management/getManagement", {params: {mId: 1}}).then(response => {
                    _self.management = response.data.management;
                }).catch(error => {
                    console.log(error);
                });

            },
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
    .management{
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