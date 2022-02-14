//当前这个模块：API进行统一管理
import requests from './request';
import mockRequests from './mockAjax';


//三级联动接口
///api/product/getBaseCategoryList      get 无参数
//发请求：axios发送请求返回结果Promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
//获取banner（Home首页轮播图接口）
export const reqGettBannerList = () => mockRequests.get('/banner');
//获取floor数据
export const reqFloorList = () => mockRequests.get('/floor');
//获取搜索商品数据      地址：/api/list     请求方式：POST      参数：需要带参数
//当前这个函数需不需要接收外部传递参数
//当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params })
//获取产品详情信息的接口  URL: /api/item/{ skuId }  请求方式: get
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });
//将产品添加到购物车中（获取更新某一个产品的个数)
//   /api/cart/addToCart/{ skuId }/{ skuNum } POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" })

//获取购物车列表数据接口
//URL:/api/cart/cartList  method:get
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' });
