<template>
    <div>
        <div class="imgshow">
            <img src="./img/img0.gif">
        </div>
        <div class="professional">
            <div class="daohang">
                <Menu theme="light" :active-name="activeName" @on-select="selectMenu" style="height: 300px;">
                    <Menu-item name="objectives" style="text-align: center;font-size: 16px;">
                            Goals
                    </Menu-item>
                    <Menu-item name="program" style="text-align: center;font-size: 16px;">
                          Program
                    </Menu-item>
                    <Menu-item name="maincourse" style="text-align: center;font-size: 16px;">
                        Courses
                    </Menu-item>
                    <Menu-item name="principal" style="text-align: center;font-size: 16px;">
                        Priciple
                    </Menu-item>
                </Menu>
            </div>
            <div class="content">
                <div class="goals" v-if="activeName == 'objectives'">
                    <p style="font-size: 24px;margin-top:5px;">Professional Construction Goals</p>
                    <div v-html="profile.goals"></div>
                </div>
                <div v-if="activeName == 'program'">
                    <p style="font-size: 24px;margin-top:5px;">Professional Training Program</p>
                    <div v-html="profile.program"></div>
                </div>
                <div v-if="activeName == 'maincourse'">
                    <p style="font-size: 24px;margin-top: 5px;">Professional Courses</p>
                    <div v-html="profile.courses"></div>
                </div>
                <div v-if="activeName == 'principal'">
                    <p style="font-size: 24px;margin-top:5px;">Professional Principle</p>
                    <div v-html="profile.principle"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                profile:{
                    profileId:null,
                    goals:'',
                    program:'',
                    courses:'',
                    principle:''
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
          activeName:function () {
              let s =this.$route.path;
              return s.substring(s.lastIndexOf("/")+1);
          }
        },
        methods:{
            fetchData() {
                let _self = this;
                this.axios.get(this.url + "profile/getProfile", {params: {profileId: 1}}).then(response => {
                    _self.profile = response.data.profile;
                }).catch(error => {
                    console.log(error);
                });
            },
            selectMenu(value){
                this.$router.push({name:value});
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

    .imgshow img {
        min-height: 154px;
        width: 1000px;
        margin: 0 auto;
    }
    .professional{
        overflow: hidden;
    }
    .daohang{
        float:left;
    }
    .content{
        float:left;
        padding-left:20px;
        width:740px;
    }
</style>