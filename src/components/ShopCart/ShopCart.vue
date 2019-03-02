<template>
    <div v-if="$route.path != '/login'">
        <transition name="shopcart">
            <div v-show="showShopCart" class="shopcart-content">
                <div class="bg-white shopcart border-right border-secondary">
                    <div v-show="books.length">
                        <ul class="container-fluid">
                            <li v-for="(book, index) in books" :key="index" class="list-unstyled mb-2 mt-1 ">
                                <div class="row mt-3">
                                    <div class="imgbox col-md-3">
                                        <img :src="book.cover" class="img-thumbnail">
                                    </div>
                                    <div class="col-md-6">
                                        <div class="col-md-12">
                                            <div class="mb-2">
                                                <div class="name">
                                                    {{ book.name }}
                                                </div>
                                                <div class="author">
                                                    {{ book.author }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            ×{{ book.count }}
                                        </div>
                                    </div>
                                    <div class="money col-md-2 ml-1">
                                        ￥{{ book.money }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-10"></div>
                                    <div class="col-md-1">
                                        <i class="iconfont icon-shanchu text-danger" style="cursor: pointer" @click="deletebook(index)"></i>
                                    </div>
                                </div>
                                <hr>
                            </li>
                        </ul>
                        <div class="mt-3 mb-3 row" v-show="total!=0">
                            <div class="col-md-8 text-center mt-2">
                                <div class="container">
                                    <div class="row">
                                        <div class="totaltxt mt-1">总计</div>
                                        <div class="text-danger totalmoney">￥{{total}}</div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-danger col-md-3">
                                提交订单
                            </button>
                        </div>
                    </div>
                    <div v-show="books.length === 0">
                        <div class="mt-4 text-center">
                            <i class="iconfont icon-gouwuche1"></i>
                            购物车为空
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="shopcart">
                <div  class="bg-danger float wrap" style="cursor: pointer"  @click="showShopCart = !showShopCart"
                      v-show="showShopCart">
                    <i class="iconfont icon-gouwuche center"></i>
                </div>
        </transition>
        <transition name="float">
            <div  class="shopcart-float bg-danger wrap" style="cursor: pointer" @click="showShopCart = !showShopCart"
                  v-show="!showShopCart">
                    <i class="iconfont icon-gouwuche center"></i>
            </div>
        </transition>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "ShopCart",
        data () {
            return {
                showShopCart: false,
            }
        },
        props: {
            orders: Array
        },
        computed: {
            ...mapState({
                books: state => state.ShopCart.books
            }),
            total () {
                let total = 0;
                this.books.forEach((book) => {
                    total += book.money
                })
                return total
            }
        },
        methods: {
            deletebook (index) {
                this.$store.commit('ShopCart/deletebook', index)
            }
        }
    }
</script>

<style scoped>
    .shopcart{
        height: 100%;
        width: 360px;
        position: fixed;
        left: 0%;
        top: 0%;
        float: left;
        z-index: 999;
        overflow: auto;
    }

    .shopcart::-webkit-scrollbar {/*滚动条整体样式*/
        width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 4px;
    }
    .shopcart::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.2);
    }
    .shopcart::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: rgba(0,0,0,0.1);
    }

    .wrap{
        display: flex;
    }

    .center{
        margin: auto;
    }

    .float{
        width: 50px;
        height: 50px;
        border-radius: 50px;
        float: left;
        position: fixed;
        top: 50%;
        left: 360px;
    }

    .shopcart-content{
        width:200px;
        height: 1200px;
        position: fixed;
        left: 0%;
        top: 0%;
        float: left;
        z-index: 999;
    }

    .shopcart-float{
        width: 50px;
        height: 50px;
        border-radius: 50px;
        float: left;
        position: fixed;
        top: 50%;
        left: 0%;
    }

    .shopcart-enter-active {
        transition: all 0.5s ease;
    }
    .shopcart-leave-active {
        transition: all .5s ease;
    }
    .shopcart-enter, .shopcart-leave-to{
        transform: translateX(-50px);
        opacity: 0;
    }

    .float-enter-active {
        transition: all .8s ease;
    }

    .float-enter, .float-leave-to{
        transform: translateX(60px);
        opacity: 0;
    }

    .imgbox{
        font-size: 0;
        width: 80px;
        height: 80px;
        text-align: center;
    }
    .imgbox img{
        max-height: 100%;
        max-width: 100%;
        vertical-align: middle;
    }

    .name{
        font-family: 等线;
        font-size: 16px;
    }

    .author{
        font-family: 仿宋;
        font-size: 14px;
    }

    .money{
        font-family: tohoma,arial;
        font-size: 15px;
    }

    .totaltxt{
        font-family: 仿宋;
        font-size: 18px;
        padding-right: 10px;
        padding-left: 10px;
    }

    .totalmoney{
        font-weight: 700;
        font-size: 22px;
        font-family: tohoma,arial;
    }

    .empty{
        height: 100%;
    }

    .empty-content{
        height: 20%;
    }
</style>
