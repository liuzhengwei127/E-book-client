import ajax from './ajax'

const BASE_URL = '/api'

// 1、登录
export const reqLogin = ({account, password}) => ajax(BASE_URL+'/user/login', {account, password}, 'POST')

// 2、注册
export const reqSignup = ({account, name, password}) => ajax(BASE_URL+'/user/signup', {account, name, password}, 'POST')

// 3、改变用户状态
export const reqChangeUser = (account) => ajax(BASE_URL+'/user/change', {account}, 'POST')

// 4、获取所有用户状态
export const reqGetUserState = () => ajax(BASE_URL+'/user/states')
