import {reqGetSearchInfo} from '@/api';

//search模块的小仓库
//state:仓库存储数据的地方
const state = {
    //仓库初始状态
    searchList:{},
};
//mutations:修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state, searchList){
        state.searchList = searchList;
    }
};
//actions:处理actions,可以书写自己的业务逻辑,也可以处理异步
const actions = {
    //获取search模块数据
   async getSearchList({commit},params={}){
       //当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数(空对象)
       //params形参:是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
      let result = await reqGetSearchInfo(params);
      if (result.code == 200) {
          commit("GETSEARCHLIST",result.data);
      }
    }
};
//getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
//项目当中就是，为了简化数据而生的。
const getters = {};


//对外暴露Store类的一个实例
export default{
    state,
    mutations,
    actions,
    getters
}