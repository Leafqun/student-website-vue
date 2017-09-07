<template>
    <div>
        <div class="imgshow">
            <img src="./img/img3.gif">
        </div>
        <div class="content">
            <div class="daohang">
                <Menu theme="light" style="height: 300px;">
                    <Menu-item class="notice_menu" name="1">
                        <span>通知公告</span>
                    </Menu-item>
                </Menu>
            </div>
            <div class="noticeList">
                <div class="noticeList_nav">
                    <router-link to="/index">首页</router-link>
                    <i class="iconfont icon-right" aria-hidden="true"></i>
                    <i class="iconfont icon-right" aria-hidden="true"></i>
                    通知公告
                </div>
                <div v-for="notice in noticeList" v-if="noticeList" style="overflow: hidden;margin-top: 5px;">
                    <div style="float: left"><i class="iconfont icon-right" aria-hidden="true"></i></div>
                    <div style="float: left;margin-left: 5px;">
                        <router-link :to="{name:'notice_detail',params:{noticeId:notice.noticeId}}">
                            <div style="overflow: hidden;width:720px;">
                                <div style="font-size: 14px;float:left">{{ notice.noticeName }}</div>
                                <div style="font-size: 12px;float:right;">{{ notice.noticeTime|time }}</div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="pageination" v-if="noticeList">
                    <Page :total="pageNum" size="small" show-elevator
                          :current="currentPage" show-total :page-size="15"
                            @on-change="handleCurrentChange" >
                    </Page>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../assets/css/iconfont/iconfont.css'
    export default {
        data() {
            return {
                noticeList: null,
                pageNum: 1,
                currentPage:1
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
                this.axios.get(this.url + "notice/getNotice", {params: {pageNum: 1}}).then(response => {
                    let rs = response.data.noticeList;
                    _self.noticeList = rs.data;
                    _self.pageNum = rs.total;
                }).catch(error => {
                    console.log(error);
                });
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                let _self = this;
                this.axios.get(this.url + "notice/getNotice", {params:{pageNum: val}}).then( response => {
                    _self.noticeList = response.data.noticeList.data;
                }).catch(error => {
                    console.log(error);
                });
            }
        },
        filters: {
            time(value) {
                let date = new Date(value);
                var Y = date.getFullYear(),
                    m = date.getMonth() + 1,
                    d = date.getDate(),
                    H = date.getHours(),
                    i = date.getMinutes(),
                    s = date.getSeconds();
                if (m < 10) {
                    m = '0' + m;
                }
                if (d < 10) {
                    d = '0' + d;
                }
                if (H < 10) {
                    H = '0' + H;
                }
                if (i < 10) {
                    i = '0' + i;
                }
                if (s < 10) {
                    s = '0' + s;
                }
                let t = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s;
                return t;
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

    .content {
        margin-bottom: 20px;
        width: 100%;
        min-height: 300px;
        height: auto;
        overflow: hidden;
    }

    .daohang {
        float: left;
    }

    .notice_menu {
        text-align: center;
        font-size: 18px;
    }

    .noticeList {
        float: left;
        margin-left: 10px;
        margin-right: 10px;
    }

    .noticeList_nav {
        border-bottom: 1px solid #888888;
        width: 730px;
        padding-bottom: 5px;
        font: 12px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-serif;
    }
    .pageination{
        text-align: center;
        margin-top:20px;
        font-size: 12px;
    }
</style>