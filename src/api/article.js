/**
 * article模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from 'axios'; // 引入axios // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const article = {
  //new 接口
  articlenew (params){
    console.log(params);
    return axios.get(`${base.bd}/journalismApi`)
  },
  //
  // 新闻列表
  articleList () {
    return axios.get(`${base.sq}/mock`);
  },
  // 新闻详情,演示
  articleDetail (id, params) {
    return axios.get(`${base.sq}/topic/${id}`, {
      params: params
    });
  },
  // post提交
  login (params) {
    return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));
  }
  // 其他接口…………
};

export default article;
