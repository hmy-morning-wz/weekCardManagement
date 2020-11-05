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
  // 入会活动列表
  getTableList(data) {
    const url = `${host}operation-activity/tMallActivity/getTmallActivityList`;
    return postJSON(url, data)
      .then((response) => {
        return Promise.resolve(response);
      }, (response) => {
        return Promise.reject(response.data || response);
      });
  },

  updateStatus(data) {
    const url = `${host}operation-activity/tMallActivity/updateStatus`;
    return postJSON(url, data)
      .then((response) => {
        return Promise.resolve(response.data || response);
      }, (response) => {
        return Promise.reject(response.data || response);
      });
  },

  // 时间倒序活动列表
  getActivityList() {
    const url = `${host}operation-activity/tMallActivity/getTmallActivityNameList`;
    return getJSON(url)
      .then((response) => {
        return Promise.resolve(response.data || response);
      }, (response) => {
        return Promise.reject(response.data || response);
      });
  },

  // 折线图数据-
  getFoldlineData(data) {
    const url = `${host}oper-act-tmall/tmall/data`;
    return postJSON(url, data)
      .then((response) => {
        return Promise.resolve(response.data || response);
      }, (response) => {
        return Promise.reject(response.data || response);
      });
  },

  // 汇总数据
  getSumData(data) {
    const url = `${host}oper-act-tmall/tmall/sumData`;
    return postJSON(url, data)
      .then((response) => {
        return Promise.resolve(response);
      }, (response) => {
        return Promise.reject(response.data || response);
      });
  }

};
