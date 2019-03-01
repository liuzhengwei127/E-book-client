<template>
    <div>
        <transition name="shopcart">
            <div v-show="showShopCart" class="shopcart-content">
                <div class="bg-white shopcart border-right border-secondary">
                    <div>
                        <ul class="container-fluid">
                            <li v-for="(book, index) in books" :key="index" class="list-unstyled mb-2 mt-1 ">
                                <div class="row">
                                    <div class="imgbox col-md-3">
                                        <img src="../Book/images/test2.jpg" class="img-thumbnail">
                                    </div>
                                    <div class="col-md-5 mt-2">
                                        <div class="name mb-3">
                                            {{ book.name }}
                                        </div>
                                        <div class="author">
                                            {{ book.author }}
                                        </div>
                                    </div>
                                    <div class="col-md-2 mt-3">
                                        ×{{ book.count }}
                                    </div>
                                    <div class="col-md-2 money mt-3">
                                        {{ book.money }}元
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-10"></div>
                                    <div class="col-md-1">
                                        <i class="iconfont icon-shanchu text-danger" style="cursor: pointer" @click="deletebook"></i>
                                    </div>
                                </div>
                                <hr>
                            </li>
                        </ul>
                        <div class="mt-3 mb-3 total">
                            总计{{total}}元
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="shopcart">
                <div  class="bg-danger float wrap" style="cursor: pointer"  @click="pop" v-show="showShopCart">
                    <i class="iconfont icon-gouwuche center"></i>
                </div>
        </transition>
        <transition name="float">
            <div  class="shopcart-float bg-danger wrap" style="cursor: pointer" @click="pop" v-show="!showShopCart">
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
            pop () {
                this.showShopCart = !this.showShopCart
            },

            deletebook () {
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
        overflow:scroll;
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
        font-size: 13px;
    }

    .author{
        font-family: 仿宋;
        font-size: 10px;
    }

    .money{
        font-family: 黑体;
        font-size: 12px;
    }

    .total{
        font-family: 仿宋;
        font-size: 18px;
    }
</style>
