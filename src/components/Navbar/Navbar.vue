<template>
    <div>
        <div class="collapse bg-dark" :class="{show : collapsed}">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-md-7 py-4">
                        <h4 class="text-white">关于</h4>
                        <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                    </div>
                    <div class="col-sm-4 offset-md-1 py-4">
                        <h4 class="text-white">联系</h4>
                        <ul class="list-unstyled">
                            <li><a href="https://github.com/liuzhengwei127" class="text-white">Follow on Github</a></li>
                            <li><a href="https://mail.qq.com/" class="text-white">Email me</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
                <div class="row">
                   <i class="iconfont icon-shuji mt-1 mr-2 ml-2"></i>
                    E-book在线书店
                </div>
            </a>
            <button class="navbar-toggler" @click="collapsed=!collapsed">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
        <ul class="nav nav-pills nav-fill" v-show="$route.meta.showNavDetail">
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
    .imgbox{
        font-size: 0;
        width: 20px;
        height: 20px;
        text-align: center;
    }
    .imgbox img{
        max-height: 100%;
        max-width: 100%;
        vertical-align: middle;
    }
</style>
