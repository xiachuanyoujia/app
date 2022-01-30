<template>
  <div>
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
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
