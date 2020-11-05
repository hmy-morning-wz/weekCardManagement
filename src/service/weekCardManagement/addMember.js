import HOST_CONFIG from 'hostconfig';
import * as ajax from 'ajax';
import {
    getJSON,
    postJSON,
    putJSON,
    delData
} from '../../utils/ajax';

let host = HOST_CONFIG.nethost;
// let downHost = HOST_CONFIG.downHost;
export default {
    // 添加品牌接口
    getActivityPageTemplateList(data) {
        const url = `${host}operation-activity/tMallActivity/getActivityPageTemplateList?type=${data}`;
        return getJSON(url)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
    // 获取入会链路列表
    getLinkTypeList() {
        const url = `${host}operation-activity/tMallActivity/getLinkTypeList`;
        return getJSON(url)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
    // 获取活动权益列表
    getEquityTypeList() {
        const url = `${host}operation-activity/tMallActivity/getEquityTypeList`;
        return getJSON(url)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
    // 新增活动
    addActivityTmall(data) {
        const url = `${host}operation-activity/tMallActivity/addActivityTmall`;
        return postJSON(url,data)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },

     // 编辑活动
     updateActivityTmall(data) {
        const url = `${host}operation-activity/tMallActivity/updateActivityTmall`;
        return postJSON(url,data)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },


     // 获取活动权益列表
     getActivityTmallDetail(data) {
        const url = `${host}operation-activity/tMallActivity/getActivityTmallDetail?activityId=${data}`;
        return getJSON(url)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
    
};
