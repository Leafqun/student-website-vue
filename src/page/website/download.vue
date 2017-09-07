<template>
    <div>
        <div class="imgshow">
            <img src="./img/img0.gif">
        </div>
        <div class="download">
            <div class="daohang">
                <Menu theme="light" :active-name="activeName" @on-select="selectMenu" style="height: 300px;">
                    <Menu-item name="allTables" style="font-size: 16px;">
                        Various Forms
                    </Menu-item>
                    <Menu-item name="courseTables" style="font-size: 16px;">
                        Course Timetable
                    </Menu-item>
                </Menu>
            </div>
            <div class="content">
                <div class="allTables" v-if="showWhat == 'allTables'">
                    <p style="margin-left: 10px;margin-bottom: 8px;margin-top: 5px; font-family:'Times New Roman','宋体';font-size: 16px;" v-for="table in tablesList">
                        <i class="iconfont icon-right" aria-hidden="true"></i>&nbsp;
                        <a :href="'http://119.23.22.99/static/manage/'+table.tableFile" :download="table.tableFile">{{table.tableFile}}</a>
                    </p>
                    <div class="pageination" v-if="tablesList">
                        <Page :total="pageNum" size="small" show-elevator
                              :current="currentPage" show-total :page-size="15"
                              @on-change="handleCurrentChange">
                        </Page>
                    </div>
                </div>
                <div class="courseTables" v-if="showWhat == 'courseTables'">
                    <p style="font-size: 24px;">Course Timetable</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName:'allTables',
                tablesList:null,
                pageNum:1,
                currentPage:1
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
                this.axios.get(this.url + "tables/getTables", {params: {pageNum: 1}}).then(response => {
                    let rs = response.data.tablesList;
                    _self.tablesList = rs.data;
                    _self.pageNum = rs.total;
                }).catch(error => {
                    console.log(error);
                });
            },
            selectMenu(val){
                this.activeName = val;
                this.$router.push({name:val});
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                let _self = this;
                this.axios.get(this.url + "Tables/getTables", {params:{pageNum: val}}).then( response => {
                    _self.tablesList = response.data.tablesList.data;
                }).catch(error => {
                    console.log(error);
                });
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
    .download{
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
    .pageination{
        text-align: center;
        margin-top:20px;
        font-size: 12px;
    }
</style>