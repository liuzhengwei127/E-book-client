<template>
    <div>
        <nav class="navbar navbar-light border-bottom">
            <a class="navbar-brand" href="#">
                <div class="row">
                   <i class="iconfont icon-shuji mt-1 mr-2 ml-2"></i>
                    E-book在线书店
                </div>
            </a>
            <ul class="nav nav-fill nav-pills" v-show="$route.meta.showNavDetail">
                <li class="nav-item">
                    <a class="nav-link" :class="($route.path==='/home')? 'active' : 'text-muted'" href="#/home">
                        <i class="iconfont"></i>
                        首页
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="($route.path==='/books')? 'active' : 'text-muted'" href="#/books">
                        <i class="iconfont icon-shu"></i>
                        全部书籍
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="($route.path==='/search')? 'active' : 'text-muted'" href="#/search">
                        <i class="iconfont icon-sousuo"></i>
                        书籍搜索
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="($route.path==='/orders')? 'active' : 'text-muted'" href="#/orders">
                        <i class="iconfont icon-dingdan"></i>
                        订单
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="($route.path==='/statistics')? 'active' : 'text-muted'" href="#/statistics">
                        <i class="iconfont icon-tongji2"></i>
                        统计
                    </a>
                </li>
            </ul>
            <div>
                <a href="#/login">登录/注册</a>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data () {
            return {
                collapsed: false,
            }
        }
    }
</script>

<style scoped>

</style>
