import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "primevue/resources/themes/bootstrap4-dark-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import "@/assets/css/main-theme.css";

import PrimeVue from "primevue/config";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import Badge from "primevue/badge";
import BadgeDirective from "primevue/badgedirective";
import InputSwitch from "primevue/inputswitch";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import Menubar from "primevue/menubar";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import Menu from "primevue/menu";
import Chart from "primevue/chart";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";
import Tag from "primevue/tag";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Skeleton from "primevue/skeleton";
import ProgressSpinner from "primevue/progressspinner";

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);

app.component("Avatar", Avatar);
app.component("AvatarGroup", AvatarGroup);
app.component("Badge", Badge);
app.component("Card", Card);
app.component("ChartComponent", Chart);
app.component("Dialog", Dialog);
app.component("MenuBar", Menubar);
app.component("DropDown", Dropdown);
app.component("InputSwitch", InputSwitch);
app.component("Button", Button);
app.component("InputNumber", InputNumber);
app.component("InputText", InputText);
app.component("MenuComponent", Menu);
app.component("DataTable", DataTable);
app.component("ColumnComponent", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("RowComponent", Row);
app.component("TagComponent", Tag);
app.component("Toast", Toast);
app.component("Skeleton", Skeleton);
app.component("ProgressSpinner", ProgressSpinner);

app.directive("badge", BadgeDirective);

app.use(store);

app.use(router);

app.mount("#app");
