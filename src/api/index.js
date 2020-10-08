// 之所以取名index因为将来引用时可以省略这个名字
// 使用的是axios，需要安装并引入
import axios from 'axios'

// 设置请求根路径
axios.defaults.baseURL = 'http://rap2api.taobao.org/app/mock/267575/vantshop/'

// axios响应拦截
axios.interceptors.response.use(config => {
  const data = config.data
  return data
})

// Home页轮播数据
export const getSlidesData = () => {
  return axios.get('slides')
}

// Home页宫格导航数据
export const getGridsData = () => {
  return axios.get('grids')
}

// Home页每日精选
export const getRecommend = () => {
  return axios.get('recommend')
}
