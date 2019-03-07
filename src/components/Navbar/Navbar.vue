<template>
    <div>
        <div v-show="collapsed" class="collapsed">
            <el-row>
                <el-col :span="4" :offset="20">
                    <el-row type="flex" justify="end">
                        <el-col :span="8">
                            <el-button size="mini" type="danger" plain circle @click="logout">注销</el-button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
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
                        <i class="iconfont icon-shouye"></i>
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
                <a href="#/login" class="card-link" v-if="!isLogin">
                    <i class="iconfont icon-denglu"></i>
                    登录/注册
                </a>
                <div class="row mr-0" v-else>
                    <div class="mt-1 text-primary" @click="collapsed=!collapsed" style="cursor: pointer">
                        <i class="iconfont icon-iconfontgerenzhongxin mr-2"></i>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Navbar",
        data () {
            return {
                collapsed: false,
            }
        },
        computed: {
            ...mapState({
                isLogin: state => state.Person.isLogin,
                isManager: state => state.Person.isManager,
            }),
        },
        methods: {
            logout () {
                this.$store.commit('Person/changeLogin')
            }
        }
    }
</script>

<style scoped>
    .collapsed{
        height: 15vh;
    }
</style>
