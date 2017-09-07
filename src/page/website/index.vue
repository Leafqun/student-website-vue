<template>
    <div>
        <div class="pic_show">
            <Carousel autoplay v-model="value2" :autoplay-speed="3000">
                <Carousel-item>
                    <div class="demo-carousel"><img src="./img/pic_1.png"></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="./img/pic_6.png"></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="./img/pic_7.png"></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="./img/pic_8.png"></div>
                </Carousel-item>
            </Carousel>
        </div>
        <div class="content" id="app">
            <div class="friend-link">
                <p class="content-p">Links</p>
                <div class="csc">
                    <div title="留学基金委"><a href="http://www.csc.edu.cn/" target="_blank"><img
                            src="./img/logo_3.png"></a>
                    </div>
                </div>
                <div class="zjut-department">
                    <div title="浙江工业大学国际学院"><a href="http://www.gjxy.zjut.edu.cn/gjxy/index.html"
                                               target="_blank"><img
                            src="./img/logo_2.png"></a><br></div>
                    <div title="浙江工业大学教务处"><a href="http://www.jwc.zjut.edu.cn/" target="_blank"><img
                            src="./img/logo_5.png"></a></div>
                </div>
                <div class="hangzhou">
                    <div title="杭州出入境"><a href="http://www.zjsgat.gov.cn:8080/was/portals/index.jsp"
                                          target="_blank"><img
                            src="./img/logo_4.png"></a></div>
                </div>
                <div class="collegeE">
                    <div title="浙江工业大学信息工程学院"><a href="http://www.ie.zjut.edu.cn/" target="_blank"><img
                            src="./img/logo_1.png"></a></div>
                </div>
            </div>
            <div class="announcement">
                <p class="content-p">Announcement</p>
                <ul>
                    <li v-for="notice in noticeList">
                        <router-link :to="{name:'notice_detail',params:{noticeId:notice.noticeId}}">
                            <div style="font-size: 15px;width:100%"><i class="iconfont icon-right" aria-hidden="true"></i>
                                {{notice.noticeName}}
                            </div>
                            <div style="font-size: 12px; text-align: right;width:100%">{{ notice.noticeTime|time
                                }}
                            </div>
                        </router-link>
                    </li>
                </ul>
                <p style="font: 12px/1.5 Tahoma,Helvetica,Arial,'宋体',sans-serif;color:black"><router-link to="/noticeList">more>></router-link></p>
            </div>
            <div class="video">
                <p class="content-p">Video</p>
                <!--<video src="http://119.23.22.99/static/VID_20161226_105252.mp4" width="300px" height="240px" controls></video>-->
                <video-player  class="video-player-box"
                               ref="videoPlayer"
                               :options="playerOptions"
                               :playsinline="true" >
                </video-player>
            </div>
        </div>
    </div>
</template>

<script>
    import { videoPlayer } from 'vue-video-player';
    import 'vue-video-player/player.css'
    import '../../assets/css/iconfont/iconfont.css'
    export default {
        data() {
            return {
                noticeList: null,
                value2:null,
                playerOptions: {
                    // videojs options
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    height:240,
                    width:300,
                    sources: [{
                        type: "video/mp4",
                        src: "http://119.23.22.99/static/VID_20161226_105252.mp4"
                    }],
                    preload:'metadata'
                }
            }
        },
        created() {
            this.fetchData();
        },
        watch: {
            '$route': 'fetchData'
        },
        components: {
            videoPlayer
        },
        methods: {
            fetchData() {
                let _self = this;
                this.axios.get(_self.url + "notice/getHeadNotice").then(response => {
                    _self.noticeList = response.data.noticeList;
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
    /*图片展示*/
    .pic_show {
        width: 100%;
        margin-top: 10px;
        text-align: center;
    }

    .content {
        margin-top:20px;
        margin-bottom: 20px;
        margin-left:10px;
        width: 1000px;
        min-height: 300px;
        height: auto;
        border-top: 1px solid #888888;
    }

    .content li:hover {
        cursor: pointer;
    }

    .content-p {
        text-align: center;
        margin: 5px;
        font: 14px/1.5 Tahoma,Helvetica,Arial,'宋体',sans-serif;
        color: black;
    }

    /*------------友链------------*/
    .friend-link {
        margin-top: 10px;
        box-shadow: -2px 2px 10px #cccccc, 2px 0 10px #cccccc;
        float: left;
        width: 200px;
        height: 300px;
        background: #809bc8;
    }

    .friend-link a {
        color: #000000;
    }

    .friend-link img {
        width: 180px;
        height: 40px;
        margin: 3px 10px;
        box-shadow: -2px 2px 10px #cccccc;
    }

    .appearRight {
        display: block;
    }

    /*-------------通知-------------*/
    .announcement{
        margin-left:5px;
        margin-top: 10px;
        box-shadow: -2px 2px 10px #cccccc,2px 0 10px #cccccc;
        float: left;
        position: relative;
        left: 20px;
        width: 430px;
        height: 300px;
        background: #809bc8;
        overflow: hidden;
    }
    .announcement ul li{
        padding: 5px;
        display: block;
        height: 30px;
    }
    .announcement ul li a div{
        float: left;
        width: 340px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .announcement ul li a{
        font: 12px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-serif;
        color:rgb(0,0,0);
    }
    .announcement ul li a:hover{
        color: darkslategrey;
    }
    .announcement  p a{
        float: right;
        margin-right: 20px;
    }
    .announcement a{
        color: #000000;
        display: block;

    }
    .announcement a:hover{
        color: darkslategrey;
    }
    .video{
        margin-top: 10px;
        text-align: center;
        box-shadow: -2px 2px 10px #cccccc,2px 0 10px #cccccc;
        float: right;
        width: 320px;
        height: 300px;
        background: #809bc8;
    }
</style>