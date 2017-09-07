<template>
    <div>
        <h3 style="text-align: center;margin-top:10px;">课程列表</h3>
        <div style="margin-left:800px;"><Input v-model="value" icon="ios-search" placeholder="课程查找" style="width: 200px"></Input></div>
        <div v-for="course in courseList">
            <div style="margin:10px 0 0 20px;float:left;font-size: 16px;" v-if="value == ''||course.courseName.indexOf(value)>=0"><router-link :to="{name:'edit',params:{courseId:course.courseId}}">{{course.courseName}}</router-link></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                courseList:null,
                value:''
            }
        },
        created() {
            this.fetchData();
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData() {
                let _self = this;
                this.axios.get(this.url + "course/getAllCourse.do").then(response => {
                    _self.courseList = response.data.courseList;
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

</style>