import ajax from './ajax'

const BASE_URL = '/api'

// 1、登录
export const reqLogin = ({account, password}) => ajax(BASE_URL+'/user/login', {account, password}, 'POST')

// 2、注册
export const reqSignup = ({account, name, password}) => ajax(BASE_URL+'/user/signup', {account, name, password}, 'POST')
