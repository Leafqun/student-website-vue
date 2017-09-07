<template>
    <div>
        <Form :model="course" label-position="right" :label-width="100" id="form">
            <input v-model="course.courseId" name="courseId" type="hidden">
            <Form-item label="课程名称" style="width:900px;color:black">
                <Input v-model="course.courseName" name="courseName"></Input>
            </Form-item>
            <Form-item label="课程名称en" style="width:900px;color:black">
                <Input v-model="course.enName" name="enName"></Input>
            </Form-item>
            <Form-item label="课程大纲" style="width:900px;">
                <editor1 :content="course.courseSchedule" :height="300" @change="updateData"></editor1>
                <input v-model="course.courseSchedule" type="hidden" name="courseSchedule"></input>
            </Form-item>
            <Form-item label="课程大纲" style="width:900px;">
                <editor1 :content="course.courseArr" :height="300" @change="updateData2"></editor1>
                <input v-model="course.courseArr" type="hidden" name="courseArr"></input>
            </Form-item>
            <button class="btn btn-primary" style="margin-left:450px;" @click="submit">提交</button>
        </Form>
    </div>
</template>

<script>
    import 'font-awesome/css/font-awesome.min.css'
    import vue_html5_editor_config from '../config/vue-html5-editor-config'
    import VueHtml5Editor from 'vue-html5-editor'
    const editor1 = new VueHtml5Editor(vue_html5_editor_config);
    export default {
        data() {
            return {
                 course:{
                     courseId:null,
                     courseName:'',
                     enName:'',
                     courseSchedule:'',
                     courseArr:''
                 }
            }
        },
        created() {
            this.fetchData();
        },
        watch: {
            '$route': 'fetchData'
        },
        components:{
            editor1
        },
        methods:{
            fetchData() {
                let _self = this;
                this.axios.get(this.url + "course/getCourse.do",{params:{courseId:this.$route.params.courseId}}).then(response => {
                    _self.course = response.data.course;
                }).catch(error => {
                    console.log(error);
                });
            },
            updateData(val){
                this.course.courseSchedule = val;
            },
            updateData2(val){
                this.course.courseArr = val;
            },
            submit(){
                let _self = this;
                let formdata = new FormData(document.getElementById("form"));
                this.axios.post(this.url + "course/submitCourse.do",formdata).then(response => {
                    _self.$Message.success(response.data.msg);
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

</style>