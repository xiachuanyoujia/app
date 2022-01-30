<template>
  <div>
    <Header></Header>
    <!-- 路由组件的出口 -->
    <router-view></router-view>
    <Footer></Footer>
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
