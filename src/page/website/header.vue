<template>
    <div>
        <div class="header">
            <div class="logo">
                <img src="./img/img18.png">
            </div>
            <div class="college-name">
                <h1><strong>College of Information Engineering</strong></h1>
                <h2><strong>Communication Engineering</strong></h2>
            </div>
        </div>
        <div class="nav">
            <div class="nav-content">
                <ul>
                    <li>
                        <router-link :to="{name:'index'}">HOME</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'objectives'}">PROFILE</router-link>
                        <ul>
                            <li>
                                <router-link :to="{name:'objectives'}">Goals</router-link>
                            </li>
                            <li>
                                <router-link :to="{name:'program'}">Program</router-link>>
                            </li>
                            <li>
                                <router-link :to="{name:'maincourse'}">Courses</router-link>>
                            </li>
                            <li>
                                <router-link :to="{name:'principal'}">Priciple</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/teachers">FACULTY</router-link>
                        <ul>
                            <li>
                                <router-link to="/teachers/list">Teachers</router-link>
                            </li>
                            <li>
                                <router-link to="/teachers/projects">Research Projects</router-link>
                            </li>
                            <li>
                                <router-link to="/teachers/papers">Research Papers</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/course">CURRIULUM RESOURCES</router-link>
                        <ul>
                            <li>
                                <router-link to="/course?redirect=outline">Course Outline</router-link>
                            </li>
                            <li>
                                <router-link to="/course?redirect=arrangement">Arrangement</router-link>
                            </li>
                            <li>
                                <router-link to="/course?redirect=materials">Documents</router-link>
                            </li>
                            <li>
                                <router-link to="/course?redirect=videos">Videos</router-link>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <router-link to="/management">MANAGEMENT SYSTEM</router-link>
                        <ul>
                            <li>
                                <router-link to="/management/handbook">Handbooks</router-link>
                            </li>
                            <li>
                                <router-link to="/management/process">Processes</router-link>
                            </li>
                            <li>
                                <router-link to="/management/requirements">Graduation Requirements</router-link>
                            </li>
                            <li>
                                <router-link to="/management/information/gradeCaculation">Precautions</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/download">DOWNLOAD</router-link>
                        <ul>
                            <li>
                                <router-link to="/download/allTables">Various Forms</router-link>
                            </li>
                            <li>
                                <router-link to="/download/courseTables">Course Timetable </router-link>>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/contact">CONTACT US</router-link>
                        <ul>
                            <li>
                                <router-link to="/contact">Intl. College</router-link>
                            </li>
                            <li>
                                <router-link to="/contact/Academic_Affairs_Office">Dean's Office</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/message">SUGGESTION</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                a: 'a'
            }
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 100px;
        overflow: hidden;
        padding-top: 20px;
        padding-bottom: 20px;
        position: relative;
        padding-left: 25px;
        padding-right: 25px;
    }
    .logo{
        float: left;
        filter: alpha(opacity=90);
        opacity: 0.9;
        -ms-filter:"alpha(opacity=90)";
    }
    .college-name{
        float: left;
        width: 600px;
    }
    .college-name h1{
        color: #356faa;
        position: relative;
        left: 50px;
        font-size: 28px;
        margin: auto;
    }
    .college-name h2{
        color: #356faa;
        position: relative;
        left: 50px;
        font-size: 18px;
        margin: auto;
    }

    /*-----------导航栏---------*/
    .nav{
        width: 1000px;
        height: 50px;
        background: #809bc8;
        z-index: 999;
        margin-left:25px;
        margin-right:25px;
        font-size: 13px;
    }
    .nav ul li a{
        display: block;
        width: 110px;
        height: 50px;
        color: #ffffff;
    }
    .nav-content{
        width: 900px;
        height: 100%;
        margin: auto;
    }
    .nav-content ul{
        list-style: none;
        margin: auto;
        text-align: center;
        width: auto;
        height: 100%;
        z-index: 999;
    }
    .nav-content ul li{
        display: block;
        line-height: 50px;
        margin: auto;
        width: 110px;
        height: 50px;
        float: left;
        position: relative;
        transition:all 1s;
        -moz-transition:all 1s; /* Firefox 4 */
        -webkit-transition:all 1s; /* Safari and Chrome */
        -o-transition:all 1s; /* Opera */
    }
    .nav-content ul li:link,.nav-content ul li:visited{
        background: #eeeeee;
    }
    .nav-content ul li:hover{
        background: #888888;
    }
    .nav-content ul li ul li{
        float: none;
        background: #809bc8;
    }
    .nav-content ul li ul{
        /*opacity: 0.8;*/
        /*filter: alpha(opacity = 80);*/
        position: absolute;
        top: 50px;
        left: 0px;
        display: none;
        width: 110px;
    }
    .nav-content ul li:hover ul{
        display: block;
    }
</style>