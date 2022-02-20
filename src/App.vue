<template>
  <div>
    <!-- 使用一下自定义插件 -->
    <!-- <h1 v-upper.erha="msg"></h1> -->
    <Header></Header>
    <!-- 路由组件的出口的地方 -->
    <router-view></router-view>
    <!-- 在Header、Footer显示的，在登陆、注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
//引入
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  data() {
    return {
      msg:"abc"
    }
  },
  components: {
    Header,
    Footer
  },
  mounted() {
    //通知Vuex发请求,获取数据,储存于仓库当中
    this.$store.dispatch("categoryList");
  },
}
</script>

<style>

</style>
