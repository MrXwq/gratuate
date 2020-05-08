import Vue from "vue";
import '@/assets/css/element-variables.scss';

import {
  Button,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
  Loading,
  MessageBox,
  Message,
  Notification,
  Form,
  FormItem,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  TimePicker,
  Switch,
  Col,
  DatePicker,
  Option,
  Select,
  Cascader,
  Tabs,
  TabPane,
  Row,
  Upload,
  Dialog
} from "element-ui";

Vue.use(Dialog);
Vue.use(Upload);
Vue.use(Row);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Cascader);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(TimePicker);
Vue.use(Col);
Vue.use(DatePicker);
Vue.use(Option);
Vue.use(Select);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
