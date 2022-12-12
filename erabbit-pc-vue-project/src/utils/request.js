// 1.创建一个新的axios实例
// 2.请求拦截器，如果有token进行头部携带
// 3.响应拦截器：1.剥离无效数据  2.处理token失效
// 4.导出一个函数，调用当前的axsio实例发请求，返回值promise

import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 导出基准地址，原因：其他地方不是通过axios发请求的地方用上基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  // axios的一些配置，baseURL timeout
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(config => {
  // 拦截业务逻辑
  // 进行请求配置的修改
  // 如果本地有token就在头部携带
  // 1.获取用户信息对象
  const { profile } = store.state.user
})
