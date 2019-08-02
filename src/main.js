import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import router from './router'
import request from '@/assets/request/api.js'
import requestUrl from '@/assets/request/requestUrl.js'
import store from './store'
import { Button, Table ,Input,Icon,Form ,FormItem,Message,Layout,Card,Grid,Cell,Tabs,Page,Radio,DatePicker,Poptip,Timeline,Row,Col,TimelineItem,Alert,Notice,Modal,MenuItem,Sider,Avatar,Submenu,TabPane,CellGroup,Menu,Panel,Collapse,RadioGroup,Tag,Upload} from 'iview';
Vue.component('Upload',Upload);
Vue.component('Tag',Tag);
Vue.component('RadioGroup',RadioGroup);
Vue.component('Collapse',Collapse);
Vue.component('Panel',Panel);
Vue.component('Menu',Menu);
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Input', Input);
Vue.component('Icon', Icon);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Layout', Layout);
Vue.component('Card', Card);
Vue.component('Grid', Grid);
Vue.component('Cell', Cell);
Vue.component('Tabs', Tabs);
Vue.component('Page', Page);
Vue.component('Radio', Radio);
Vue.component('DatePicker', DatePicker);
Vue.component('Poptip', Poptip);
Vue.component('Timeline', Timeline);
Vue.component('Row', Row);
Vue.component('Col',Col);
Vue.component('TimelineItem',TimelineItem);
Vue.component('Alert',Alert);
Vue.component('Notice',Notice);
Vue.component('Modal',Modal);
Vue.component('MenuItem',MenuItem);
Vue.component('Sider',Sider);
Vue.component('Avatar',Avatar);
Vue.component('Submenu',Submenu);
Vue.component('TabPane',TabPane);
Vue.component('CellGroup',CellGroup);

Vue.prototype.$Message = Message;
Vue.prototype.request = request;
Vue.prototype.requestUrl = requestUrl.url;
Vue.config.productionTip = false;
Vue.use(request);
Vue.use(requestUrl);
// Vue.use(iView);
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
