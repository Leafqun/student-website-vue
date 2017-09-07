import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios'
import url from './router/url'
import AMap from 'vue-amap'


AMap.initAMapApiLoader({
    key: '00e7bd2746771744cb1427bf416e9026',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','Geocoder']
});

Vue.use(AMap);
Vue.prototype.axios = axios;
Vue.prototype.url = url;
Vue.use(iView);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
