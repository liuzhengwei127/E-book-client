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
    stock: book.stock,
    url: book.url,
    press: book.press,
    year: book.year,
    pages: book.pages,
}, 'POST')

// 7、修改书籍
export const reqModifyBook = (book,newisbn,url) => ajax(BASE_URL+'/book/modify', {
    name: book.name,
    author: book.author,
    isbn: book.isbn,
    newisbn: newisbn,
    outline: book.outline,
    price: book.price,
    stock: book.stock,
    url: url,
    press: book.press,
    year: book.year,
    pages: book.pages,
}, 'POST')

// 8、获得相应用户订单
export const reqGetOrder = (account) => ajax(BASE_URL+'/order/get',{account}, 'POST')

// 9、添加订单
export const reqAddOrder = (orders) => ajax(BASE_URL+'/order/add', {orders}, 'POST')

// 10、获得所有订单
export const reqGetAllOrder = () => ajax(BASE_URL+'/order/getall')

// 11、搜索书籍
export const reqSearchBook = (filter) => ajax(BASE_URL+'/book/search', {filter})

// 12、删除上传的书籍图片
export const reqDeleteImg = (filename) => ajax(BASE_URL+'/delete', {filename})

// 13、获得书籍详情
export const reqGetBookDetail = (ISBN) => ajax(BASE_URL+'/book/detail', {ISBN})

// 14、删除书籍
export const reqDeleteBook = (ISBN) => ajax(BASE_URL+'/book/delete', {ISBN})

// 15、判断用户最近是否登录
export const reqInitLogin = () => ajax(BASE_URL+'/user/init')

// 16、用户登出
export const reqLogout = () => ajax(BASE_URL+'/user/logout')
