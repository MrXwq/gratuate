import Vue from 'vue'
import {
  Button, Container, Header, Aside,
  Main, Menu, Submenu, MenuItemGroup,
  MenuItem, Dropdown, DropdownMenu,
  DropdownItem, Table,
  TableColumn,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;