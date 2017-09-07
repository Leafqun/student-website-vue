<template>
    <div>
        <div class="imgshow">
            <img src="./img/img1.gif">
        </div>
        <div class="teachers">
            <div class="daohang">
                <Menu theme="light" :active-name="activeName" @on-select="selectMenu" style="height: 300px;">
                    <Menu-item name="list" style="font-size: 16px;">
                        Teachers
                    </Menu-item>
                    <Menu-item name="projects" style="font-size: 16px;">
                        Research Projects
                    </Menu-item>
                    <Menu-item name="papers" style="font-size: 16px;">
                        Research Papers
                    </Menu-item>
                </Menu>
            </div>
            <div class="content">
                <div class="list" v-if="showWhat == 'list'">
                    <div style="font-size: 24px;margin-bottom: 5px;">List of Professional Teachers</div>
                    <div v-html="faculty.teachers"></div>
                </div>
                <div class="projects" v-if="showWhat == 'projects'">
                    <div style="font-size: 24px;margin-bottom: 5px;">Professional Research Projects</div>
                    <div v-html="faculty.projects"></div>
                </div>
                <div class="papers" v-if="showWhat == 'papers'">
                    <div style="font-size: 24px;margin-bottom: 5px;">Professional Research Papers</div>
                    <div v-html="faculty.papers"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName:'list',
                faculty:{
                    facultyId:null,
                    teachers:'',
                    projects:'',
                    papers:''
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
                this.axios.get(this.url + "faculty/getFaculty", {params: {facultyId: 1}}).then(response => {
                    _self.faculty = response.data.faculty;
                }).catch(error => {
                    console.log(error);
                });

            },
            selectMenu(val){
                this.activeName = val;
                this.$router.push({name:val});
            },
        }
    }
</script>

<style scoped>
    .imgshow {
        width: 100%;
        margin: 20px auto 10px;
        text-align: center;
    }
    .teachers{
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