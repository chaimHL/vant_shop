<template>
  <div>
    <!-- 顶部基础信息 -->
    <div class="personal-header">
      <div class="user-photo">
        <img src="../assets/imgs/user_photo.svg" alt="">
      </div>
      <div class="user-message">
        <div class="user-name">卖和尚的小西瓜</div>
        <div class="user-lever">普通用户</div>
      </div>
      <i class="header-setting iconfont iconshezhi"></i>
    </div>
    <tabbar :active="3"></tabbar>
  </div>
</template>

<script>
import tabbar from '../components/tabbar.vue'

export default {
  components: {
    tabbar
  }
}
</script>

<style lang='less' scoped>
.personal-header{
  display: flex;
  align-items: center;
  background-color: #001938;
  padding: 30px 20px;
  .user-photo{
    width: 60px;
    height: 60px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .user-message{
    color: #FFFDEF;
    font-size: 14px;
    margin-left: 16px;
    line-height: 26px;
  }
  .header-setting{
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 20px;
    color: #FFFDEF;
  }
}

</style>
