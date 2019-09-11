import axios from 'axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from '../../router'
//  axios 配置
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8,'
// axios.defaults.baseURL =process.env.NODE_ENV === 'development' ? 'http://localhost:8081' : 'http://localhost:8081';
// 配置数据请求的基础url
axios.defaults.baseURL =process.env.VUE_APP_BASE_API; 
axios.defaults.withCredentials = false;
const SUCCESS = 200 // 成功时返回的code码，根据项目的不同和后台一致规定code码，此项目使用'200'

// 请求拦截器
axios.interceptors.request.use((config) => {
  var token = localStorage.getItem('token'); // 存储需要接口连接时验证（比如用户token等）的数据，可根据项目不同，通过不同方式（比如存放在localStorage里）获取到并赋值
  if (token) {
    // 同域处理 Authorization:"Bearer "+token
    config.headers.common.Authorization ="Bearer "+token;
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
//返回状态判断
axios.interceptors.response.use((res) => {
  console.log(res)
  if (res.status ===SUCCESS) {
    // if(res.data.code==408){
    //   iView.Message.error(res.data.msg);
    //   router.push({ path: "/" });
    //   localStorage.clear();
    // }
    return Promise.resolve(res)
  }
  else{
    
    return Promise.reject(new Error(res.status))
  }
  
}, (error) => {
  // console.log('error=>', error)
    iView.Message.error('登录过期，请重新登录');
    router.push({ path: "/" });
    localStorage.clear();
  return Promise.reject(new Error(error))
})
 
function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(new Error(err))
      })
      .catch((error) => {
        reject(new Error(error))
      })
  })
}
 
function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(new Error(err))
      })
      .catch((error) => {
        reject(new Error(error))
      })
  })
}
 
function fetchPut (url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(new Error(err))
      })
      .catch((error) => {
        reject(new Error(error))
      })
  })
}
 
function fetchDelete (url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(new Error(err))
      })
      .catch((error) => {
        reject(new Error(error))
      })
  })
}
 
export default {
  httpGet (url, getparams) {
    return fetchGet(url, { params: getparams })
  },
  httpPost (url, params) {
    return fetch(url, params)
  },
  httpPut (url, params) {
    return fetchPut(url, params)
  },
  httpDelete (url, getparams) {
    return fetchDelete(url, { params: getparams })
  }
}



 