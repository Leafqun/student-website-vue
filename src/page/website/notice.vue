<template>
    <div>
        <div class="imgshow">
            <img src="./img/img3.gif">
        </div>
        <div class="content">
            <div id="app">
                <div class="notice-detail">
                    <h1>{{notice.noticeName}}</h1>
                    <h2>时间：{{ notice.noticeTime|time}}</h2>
                    <div v-html="notice.content" class="notice-content"></div>
                    <div v-if="notice.file">附件：<a :download="notice.file" :href="'http://119.23.22.99/static/manage/'+notice.file">{{notice.file}}</a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                notice:{
                    noticeId:null,
                    noticeName:"",
                    content:"",
                    file:null,
                    noticeTime:null
                }
            }
        },
        created(){
            this.fetchData();
        },
        watch:{
          '$route': 'fetchData'
        },
        methods:{
            fetchData(){
                let _self = this;
                this.axios.get(this.url+"notice/getNoticeContent",{params:{noticeId:this.$route.params.noticeId}}).then(response => {
                    _self.notice = response.data.notice;
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
        margin-top:20px;
        margin-bottom: 20px;
        width: 100%;
        min-height: 300px;
        height: auto;
        border-top: 1px solid #888888;
    }

    /*--------------通知详情----------*/
    .notice-detail{
        margin: auto;
    }
    .notice-detail h1{
        text-align: center;
        font-size: 29px;
        margin: 10px;
    }
    .notice-detail h2{
        text-align: center;
        font-size: 16px;
        font-weight: normal;
        margin: 5px auto 30px;
    }
    .notice-content{
        line-height: 25px;
        font-weight: 100;
    }

</style>