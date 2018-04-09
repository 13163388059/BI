import 'babel-polyfill'

import Vue from 'vue'
import CSS_RESET from './css/reset.css'
import ICON from './css/iconfont/iconfont.css'
import App from './components/main/App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import {
    // Pagination,
    // Dialog,
    // Autocomplete,
    // Dropdown,
    // DropdownMenu,
    // DropdownItem,
    // Menu,
    // Submenu,
    // MenuItem,
    // MenuItemGroup,
    // Input,
    // InputNumber,
    // Radio,
    // RadioGroup,
    // RadioButton,
    // Checkbox,
    // CheckboxButton,
    // CheckboxGroup,
    // Switch,
    // Select,
    // Option,
    // OptionGroup,
    // Button,
    // ButtonGroup,
    Table,
    TableColumn,
    // DatePicker,
    // TimeSelect,
    // TimePicker,
    // Popover,
    // Tooltip,
    // Breadcrumb,
    // BreadcrumbItem,
    // Form,
    // FormItem,
    Tabs,
    TabPane,
    // Tag,
    Tree,
    // Alert,
    // Slider,
    // Icon,
    // Row,
    // Col,
    // Upload,
    // Progress,
    // Badge,
    // Card,
    // Rate,
    // Steps,
    // Step,
    // Carousel,
    // CarouselItem,
    // Collapse,
    // CollapseItem,
    // Cascader,
    // ColorPicker,
    // Transfer,
    // Container,
    // Header,
    // Aside,
    // Main,
    // Footer,
    // Loading,
    // MessageBox,
    // Message,
    // Notification
} from 'element-ui'

import Container from './components/common/container.vue'
import ajax from './utils/ajax'
import polling from './utils/polling'

window.echarts = echarts
window.glob = {
    ajax,
    polling: polling()
}

Vue.use(Tree)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.component('bi-container', Container)



new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    render: h => h(App)
})



//window.STATIC_URL = 'http://ecs.whwckj.com:1001/'
// window.ajax = ajax
window.STATIC_URL = 'http://localhost:' + require('../server/server.config').port + '/'

