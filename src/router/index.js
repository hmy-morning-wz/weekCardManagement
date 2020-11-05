import Vue from 'vue';
import VueRouter from 'vue-router';
import memberManagement from './weekCardManagement';


const appMain = (resolve) => {
    require(['../page/home.vue'], resolve);
};
const routes = [{
        path: '/',
        component: appMain,
        meta: {
            title: '首页',
        },
    },
].concat(
    memberManagement,
);

Vue.use(VueRouter);

export default new VueRouter({
    // mode: 'history',
    routes,
});
