<template>
    <div style="position: relative;">
        <div v-if="loading" style="margin-top: 60px;">
            <Spin>
                <Icon type="load-c" size=35 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        </div>
        <div v-else style="font-size: 15px;">
            <div v-html="course.courseSchedule" v-if="isShow"></div>
            <div v-html="course.courseArr" v-else></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                course:{
                    courseId:null,
                    courseName:"",
                    enName:'',
                    courseSchedule:"",
                    courseArr:""
                },
                loading:true
            }
        },
        created() {
            this.fetchData();
        },
        watch: {
            '$route': 'fetchData'
        },
        computed:{
            isShow(){
                let path = this.$route.path;
                if(path.indexOf("outline")>=0)  return true;
                else return false;
            }
        },
        methods: {
            fetchData() {
                let _self = this;
                this.axios.get(this.url + "course/getCourse",{params:{courseId:this.$route.params.courseId}}).then(response => {
                    _self.course = response.data.course;
                    _self.loading = false;
                }).catch(error => {
                    console.log(error);
                    _self.loading = false;
                });
            }
        }
    }
</script>

<style scoped>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>