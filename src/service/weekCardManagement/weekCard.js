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

    // 添加周期卡产品
    addSaleProductCfg(data) {
        const url = `${host}operation-mall/saleProductCfg/addSaleProductCfg`;
        return postJSON(url, data)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
    // 编辑周期卡
    updateSaleProductCfg(data) {
        const url = `${host}operation-mall/saleProductCfg/updateSaleProductCfg`;
        return postJSON(url, data)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
    // 获取周期卡通用配置
    getSaleGeneralCfg() {
        const url = `${host}operation-mall/saleGeneralCfg/getSaleGeneralCfg`;
        return getJSON(url)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
    // 添加周期卡通用配置
    addSaleGeneralCfg(data) {
        const url = `${host}operation-mall/saleGeneralCfg/addSaleGeneralCfg`;
        return postJSON(url,data)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
    // 编辑周期卡通用配置
    updateSaleGeneralCfg(data) {
        const url = `${host}operation-mall/saleGeneralCfg/updateSaleGeneralCfg`;
        return postJSON(url,data)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
    // 获取主体商户列表
    getMainMerchantList() {
        const url = `${host}operation-mall/saleProductCfg/getMainMerchantList`;
        return getJSON(url)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
    // 获取时间精度列表
    getEffectiveTimePrecisionList() {
        const url = `${host}operation-mall/saleProductCfg/getEffectiveTimePrecisionList`;
        return getJSON(url)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
    // 获取结算商户列表
    getEquityMerchantList() {
        const url = `${host}operation-mall/saleProductCfg/getEquityMerchantList`;
        return getJSON(url)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
    // 获取虚拟卡
    getSaleNote(cityCode) {
        const url = `${host}operation-mall/saleProductCfg/getSaleNote?cityCode=${cityCode}`;
        return getJSON(url)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
    // 获取周期卡信息列表
    getWeekCardList(data) {
        const url = `${host}operation-mall/saleProductCfg/getSaleProductList`;
        return postJSON(url,data)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
    getCardDetail(id) {
        const url = `${host}operation-mall/saleProductCfg/getSaleProductCfgById?id=${id}`;
        return getJSON(url)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
    // 产品上下架
    updateSaleProductStatus(data) {
        const url = `${host}operation-mall/saleProductCfg/updateSaleProductStatus`;
        return postJSON(url,data)
            .then((response) => {
                return Promise.resolve(response);
            }, (response) => {
                return Promise.reject(response);
            });
    },
};
