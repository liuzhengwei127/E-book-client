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

// 5、获取所有书籍
export const reqGetAllBook = () => ajax(BASE_URL+'/book/get')

// 6、添加书籍
export const reqAddBook = (book) => ajax(BASE_URL+'/book/add', {
    name: book.name,
    author: book.author,
    isbn: book.isbn,
    outline: book.outline,
    price: book.price,
    stock: book.stock
}, 'POST')

// 7、修改书籍
export const reqModifyBook = (book) => ajax(BASE_URL+'/book/modify', {
    name: book.name,
    author: book.author,
    isbn: book.isbn,
    outline: book.outline,
    price: book.price,
    stock: book.stock
}, 'POST')

// 8、获得相应用户订单
export const reqGetOrder = (account) => ajax(BASE_URL+'/order/get',{account}, 'POST')
