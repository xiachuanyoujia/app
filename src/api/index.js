//当前这个模块：API进行统一管理
import requests from './request';

//三级联动接口
///api/product/getBaseCategoryList      get 无参数
//发请求：axios发送请求返回结果Promise对象
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});

