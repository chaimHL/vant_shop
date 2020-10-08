<template>
  <van-swipe :autoplay="0">
    <van-swipe-item v-for="item in slides" :key="item.goodId">
      <img v-lazy="item.image" width="100%" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
// 只有这里用到了Swipe和SwipeItem,所以直接以组件形式导入
import { Swipe, SwipeItem } from 'vant'
export default {
  props: ['slides'],
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
}
</script>

<style lang='less' scoped>
.van-swipe-item{
  height: 180px;
}
</style>
