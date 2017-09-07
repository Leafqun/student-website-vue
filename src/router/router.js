import Vue from 'vue'
import Router from 'vue-router'

/*import main from '../page/website/main.vue'
import index from '../page/website/index.vue'
import professional from '../page/website/professional .vue'
import professional_objectives from '../page/website/professional_objectives.vue'
import professional_program from '../page/website/professional_program.vue'
import professional_maincourse from '../page/website/professional_maincourse.vue'
import professional_principal from '../page/website/professional_principal.vue'
import notice_detail from '../page/website/notice.vue'
import noticeList from '../page/website/noticeList.vue'
import courses from '../page/website/courseList.vue'
import course from '../page/website/course.vue'
import course_detail from '../page/website/course_detail.vue'
import course_file from '../page/website/course_file.vue'
import management from '../page/website/management.vue'
import download from '../page/website/download.vue'
import contact from '../page/website/contact.vue'
import message from '../page/website/message.vue'
import teachers from '../page/website/teachers.vue'
import course_edit from '../page/course_edit.vue'
import courseList from '../page/courses.vue'
*/
Vue.use(Router);

const main = resolve => require(['../page/website/main.vue'], resolve);
const index = resolve => require(['../page/website/index.vue'], resolve);
const professional = r => require.ensure([], () => r(require('../page/website/professional .vue')), 'professional');
const notice_detail = resolve => require(['../page/website/notice.vue'], resolve);
const noticeList = resolve => require(['../page/website/noticeList.vue'], resolve);
const courses = resolve => require(['../page/website/courseList.vue'], resolve);
const course = resolve => require(['../page/website/course.vue'], resolve);
const course_detail = resolve => require(['../page/website/course_detail.vue'], resolve);
const course_file = resolve => require(['../page/website/course_file.vue'], resolve);
const management = resolve => require(['../page/website/management.vue'], resolve);
const download = resolve => require(['../page/website/download.vue'], resolve);
const contact = resolve => require(['../page/website/contact.vue'], resolve);
const message = resolve => require(['../page/website/message.vue'], resolve);
const teachers = resolve => require(['../page/website/teachers.vue'], resolve);
const map = resolve => require(['../page/website/map.vue'], resolve);

const courseList = resolve => require(['../page/courses.vue'], resolve);
const course_edit = resolve => require(['../page/course_edit.vue'], resolve);



const router = new Router({
    routes:[
        { path: '/courseList', name: 'courseList', component: courseList },
        { path: '/edit/:courseId', name: 'edit', component: course_edit },
        { path: '/add', name: 'add', component: course_edit },
        { path: '/', name: 'main', component: main, redirect: '/index',
            children:[
                { path: 'index', name: "index", component: index },
                { path: 'professional', name: "professional", component: professional,redirect:'professional/objectives',
                    children:[
                        { path: 'objectives', name: "objectives", component: professional },
                        { path: 'program', name: "program", component: professional },
                        { path: 'maincourse', name: "maincourse", component: professional },
                        { path: 'principal', name: "principal", component: professional }
                    ]
                },
                { path: 'notice/:noticeId', name: 'notice_detail', component: notice_detail},
                { path: 'noticeList', name: 'noticeList', component: noticeList},
                { path: 'course', name: 'courses', component: courses},
                { path: 'course/:courseId', name: 'course2', component: course,redirect:{name:'outline'},
                    children: [
                        { path: 'outline', name:'outline', component: course_detail },
                        { path: 'arrangement', name:'arrangement', component: course_detail },
                        { path: 'materials', name:'materials', component: course_file },
                        { path: 'videos', name:'videos', component: course_file },
                    ]
                },
                { path: 'management', name: 'management', component: management,redirect:{name:'handbook'},
                    children:[
                        { path: 'handbook', name: 'handbook', component: management },
                        { path: 'process', name: 'process', component: management },
                        { path: 'requirements', name: 'requirements', component: management },
                        { path: 'information', name: 'information', component: management,
                            children:[
                                { path: 'gradeCaculation', name: 'gradeCaculation', component: management },
                                { path: 'tips', name: 'tips', component: management }
                            ]
                        }
                    ]
                },
                { path: 'download', name: 'download', component: download,redirect:{name:'allTables'},
                    children:[
                        { path: 'allTables', name: 'allTables', component: download },
                        { path: 'courseTables', name: 'courseTables', component: download },
                    ]
                },
                { path: 'contact', name: 'contact', component: contact,redirect:{name:'International_College'},
                    children:[
                        { path: 'International_College', name: 'International_College', component: contact },
                        { path: 'Academic_Affairs_Office', name: 'Academic_Affairs_Office', component: contact }
                    ]
                },
                { path: 'message', name: 'message2', component: message },
                { path: 'teachers', name: 'teachers', component: teachers,redirect:{name:'list'},
                    children:[
                        { path: 'list', name: 'list', component: teachers },
                        { path: 'projects', name: 'projects', component: teachers },
                        { path: 'papers', name: 'papers', component: teachers }
                    ]
                },
                { path: 'map', name: 'map', component: map }
            ]
        },

    ]
});

export default router;