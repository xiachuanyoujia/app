<template>
  <div>
      <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要再引入 -->
      <TypeNav/>
      <ListContainer/>
      <Recommend/>
      <Rank/>
      <Like/>
      <!-- Floor这个组件：自己在组件内部是没有发请求的，数据是父组件给的 -->
      <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
      <Brand/>

  </div>
</template>

<script>
//引入其余组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'

export default {
  name:'',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    //派发action,获取floor组件的数据
    this.$store.dispatch("getFloorList");
    //获取用户信息在首页展示
    this.$store.dispatch('getUserInfo')
  },
  computed:{
    ...mapState({
      floorList:state=>state.home.floorlist
    })
  },
}
</script>

<style>

</style>