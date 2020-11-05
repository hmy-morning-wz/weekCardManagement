

const weekCardManagement = (resolve) => {
    require(['@/page/weekCardManagement/weekCardManagement.vue'], resolve);
};
const generalConfig = (resolve) => {
    require(['@/page/weekCardManagement/generalConfig.vue'], resolve);
};
const addWeekCard = (resolve) => {
    require(['@/page/weekCardManagement/addWeekCard.vue'], resolve);
};
const checkWeekCard = (resolve) => {
    require(['@/page/weekCardManagement/editWeekCard.vue'], resolve);
};
const editWeekCard = (resolve) => {
    require(['@/page/weekCardManagement/editWeekCard.vue'], resolve);
};

export default [
    {
        path: '/weekCardManagement',
        component: weekCardManagement,
        meta: ['周期卡列表'],
    },
    {
        path: '/generalConfig',
        component: generalConfig,
        name: 'generalConfig',
        meta: ['通用配置']
    },
    {
        path: '/addWeekCard',
        component: addWeekCard,
        name: 'addWeekCard',
        meta: ['新建周期卡']
    },
    {
        path: '/checkWeekCard',
        component: checkWeekCard,
        name: 'checkWeekCard',
        meta: ['查看周期卡']
    },
    {
        path: '/editWeekCard',
        component: editWeekCard,
        name: 'editWeekCard',
        meta: ['编辑周期卡']
    }
]
