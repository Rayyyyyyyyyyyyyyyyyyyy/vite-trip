import { createApp } from 'vue'
import "@/assets/styles/custom/element-variables.scss";
// @ts-ignore
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from './App.vue'
import './index.css'
import "./assets/styles/tailwind.scss";
import router from "./router";
import 'virtual:svg-icons-register';
import svgIconPlugin from "@/plugins/svgIcon";
import AOS from "aos";
import 'aos/dist/aos.css';


const app = createApp(App)
AOS.init();
app.use(router)
app.use(ElementPlus)
app.use(svgIconPlugin, {imports: []});
app.mount('#app')
