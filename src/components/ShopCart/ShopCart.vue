<template>
    <div>
        <transition name="shopcart">
            <div v-show="showShopCart" class="shopcart-content">
                <div class="bg-white shopcart border-right border-secondary">
                    <div>
                        购物车
                    </div>
                </div>
            </div>
        </transition>
        <transition name="shopcart">
                <div  class="bg-danger float wrap"  @click="pop" v-show="showShopCart">
                    <i class="iconfont icon-gouwuche center"></i>
                </div>
        </transition>
        <transition name="float">
            <div  class="shopcart-float bg-danger wrap"  @click="pop" v-show="!showShopCart">
                    <i class="iconfont icon-gouwuche center"></i>
            </div>
        </transition>
    </div>
</template>

<script>
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
        methods: {
            pop () {
                this.showShopCart = !this.showShopCart
            }
        }
    }
</script>

<style scoped>
.shopcart{
    height: 600px;
    width: 200px;
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
    left: 200px;
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
</style>
