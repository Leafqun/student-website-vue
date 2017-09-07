<template>
    <div>
        <div class="imgshow">
            <img src="./img/img2.gif">
        </div>
        <div class="content" id="app">
            <h3 style="text-align: center;margin-top:10px;">Course List</h3>
            <div style="margin-left:800px;"><Input v-model="value" icon="ios-search" placeholder="course search" style="width: 200px"></Input></div>
            <div v-for="course in courseList" style="margin:10px 0 0 10px;">
                <div class="courselist" v-if="search(course.enName)"><router-link :to="{name:where,params:{courseId:course.courseId}}">{{course.enName}}</router-link></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                courseList:null,
                value:null
            }
        },
        created() {
            this.fetchData();
        },
        watch: {
            '$route': 'fetchData'
        },
        computed:{
            where(){
                let name = this.$route.query.redirect;
                if(name) return name;
                else return 'course2';
            }
        },
        methods: {
            fetchData() {
                let _self = this;
                this.axios.get(this.url + "course/getCourseList").then(response => {
                    _self.courseList = response.data.courseList;
                }).catch(error => {
                    console.log(error);
                });
            },
            search(val){
                if(val){
                    if(val.indexOf(this.value)>=0||this.value == ''||!this.value) return true;
                    else return false;
                }else{
                    return false;
                }
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
    .content{
        height:300px;
    }
    .courselist{
        float:left;
        font-size: 16px;
        margin-right:25px;
    }
</style>