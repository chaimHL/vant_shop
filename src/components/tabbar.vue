<template>
  <div>
    <van-tabbar v-model="activeIndex">
      <van-tabbar-item to="/home">
        <span>精选</span>
        <template #icon>
          <i class="iconfont iconjingxuan"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/list" dot>
        <span>分类</span>
        <template #icon>
          <i class="iconfont iconcategory"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/cart" badge="5">
        <span>购物车</span>
        <template #icon>
          <i class="iconfont iconiconcart"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/personal" badge="20">
        <span>我的</span>
        <template #icon>
          <i class="iconfont iconwode"></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.active
    }
  },
  props: ['active']
}
</script>

<style>
</style>
