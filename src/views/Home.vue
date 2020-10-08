<template>
  <div class="home-page">
    <!-- 搜索 -->
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        input-align="center"
      />
    </form>
    <!-- banner轮播 -->
    <slides :slides="slides"></slides>
    <!-- 宫格导航 -->
    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="(item, index) in grids" :key="index">
        <van-image :src="item.image">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </van-grid-item>
    </van-grid>
    <!-- 宣传图片 -->
    <van-image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/189acdf7e9b807cfc22d394df87c1958.jpg?f=webp&w=1080&h=420&bg=FEFEFE">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
    <!-- 每日精选 -->
    <h2 class="section-title">每日精选</h2>
    <div class="example-3d">
      <swiper class="swiper" :options="swiperOption" v-if="recommend.length">
        <swiper-slide v-for="item in recommend" :key="item.goodsId">
          <div>
            <img :src="item.image" width="100%">
            <div class="goodsName">{{item.goodsName}}</div>
            <div class="goodsPrice">￥{{item.goodsPrice|toFixed}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 底部导航 -->
    <tabbar :active="0"></tabbar>
  </div>
</template>

<script>
import tabbar from '../components/tabbar.vue'
import { getSlidesData, getGridsData, getRecommend } from '../api/index.js'
import slides from '../components/slides.vue'
// 引入外部的插件
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  data() {
    const _this = this
    return {
      value: '',
      slides: [],
      grids: [],
      recommend: [],
      swiperOption: {
        effect: 'coverflow',
        loop: true,
        grabCursor: true,
        initialSlide: 1,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        },
        on: {
          tap: function() {
            // 这里this指向轮播,所以我们声明了_this
            // 我们可以获取到点击的轮播的index
            const index = this.clickedSlide.dataset.swiperSlideIndex - 1 === -1 ? this.loopedSlides - 1 : this.clickedSlide.dataset.swiperSlideIndex - 1
            _this.$router.push({ name: 'goodsDetail', params: { goodsId: _this.recommend[index].goodsId } })
          }
        }
      }
    }
  },
  components: {
    tabbar,
    slides,
    Swiper,
    SwiperSlide
  },
  methods: {
    onSearch() {},
    onCancel() {}
  },
  async created() {
    const slidesData = await getSlidesData()
    this.slides = slidesData.slides

    const gridsData = await getGridsData()
    this.grids = gridsData.grid

    const recommendData = await getRecommend()
    this.recommend = recommendData.data
  }
}
</script>

<style lang="less" scoped>
.home-page{
  padding-bottom: 50px;
}
.section-title{
 font-size: 18px;
 padding: 10px 10px 0 10px;
 color: #646464;
}
.example-3d {
  width: 100%;
  height: 200px;
  padding: 0 0 10px 0;
}
.swiper {
  height: 100%;
  width: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 200px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    color: #323232;
  }
}
.goodsPrice{
  color: #BD2C00;
}
</style>
