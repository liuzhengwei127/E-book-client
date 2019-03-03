<template>
    <div class="container-fluid">
        <div class="row">
            <div class="imgbox col-md-2">
                <img :src="book.cover" class="img-thumbnail" alt="Responsive image">
            </div>
            <div class="col-md-6">
                <div>
                    <div class="name mt-3 mb-2">{{book.name}}</div>
                    <div class="author mb-1">作者:{{book.author}}</div>
                    <div class="outline">概述:{{book.outline}}</div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="isbn mt-3 mb-5">ISBN:{{book.ISBN}}</div>
                <div class="stock mb-2">库存   {{book.stock}}</div>
                <div class="price">{{book.price}}元</div>
            </div>
            <div class="col-md-2">
                <div class="row mt-5 mb-2">
                    <i class="iconfont icon-jian col-md-3" @click="substract" :style="count>1? 'cursor: pointer':''"></i>
                    <div class="col-md-6 text-center">{{count}}</div>
                    <i class="iconfont icon-jia col-md-3" @click="add" style="cursor: pointer"></i>
                </div>
                <button class="btn btn-danger btn-block mt-1" @click="addtocart">
                    加入购物车
                </button>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "Book",
        props: {
            book: Object
        },
        data() {
            return {
                count: 1,
            }
        },
        methods: {
            substract () {
                if (this.count > 1)
                    this.count--
            },

            add () {
                this.count++
            },

            addtocart () {
                this.$store.commit('ShopCart/addtocart', {
                    cover: this.book.cover,
                    name: this.book.name,
                    author: this.book.author,
                    count: this.count,
                    price: this.book.price,
                    money: this.count*this.book.price
                })
            }
        }
    }
</script>

<style scoped>
    .imgbox{
        font-size: 0;
        width: 200px;
        height: 200px;
        line-height: 240px;
        text-align: center;
    }
    .imgbox img{
        max-height: 100%;
        max-width: 100%;
        vertical-align: middle;
    }

    .name{
        font-family: 黑体;
        font-size: 24px;
    }

    .author{
        font-family: 仿宋;
        font-size: 15px;
    }

    .outline{
        font-family: 等线;
        font-size: 12px;
        opacity: 0.6;
    }

    .isbn{
        font-size:10px;
        font-family: Arial;
    }

    .stock{
        font-size:15px;
        font-family: 仿宋;
    }

    .price{
        font-size: 20px;
        font-family: 黑体;
    }
</style>
