<template>
    <div>
        <div v-for="courseFile in courseFileList" style="margin-left:10px;margin-bottom:10px;font-size: 15px;" v-if="courseFile.ctype == type">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <a :download="courseFile.cfileName" :href="'http://119.23.22.99/static/manage/'+courseFile.cfileName">{{courseFile.cfileName}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                courseFileList:null
            }
        },
        created() {
            this.fetchData();
        },
        watch: {
            '$route': 'fetchData'
        },
        computed:{
            type(){
                let path = this.$route.path;
                if(path.indexOf("materials")>=0)  return 1;
                else return 2;
            }
        },
        methods: {
            fetchData() {
                let _self = this;
                this.axios.get(this.url + "course/getAllCourseFile",{params:{courseId:this.$route.params.courseId}}).then(response => {
                    _self.courseFileList = response.data.courseFileList;
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

</style>