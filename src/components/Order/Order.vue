<template>
    <div class="container mb-5 mt-5">
        <i class="iconfont icon-dingdan"></i>
        <div v-for="(book) in order.books" :key="book.name" class="row mt-3 mb-3">
            <div class="imgbox col-md-2">
                <img :src="book.cover" class="img-thumbnail" alt="Responsive image">
            </div>
            <div class="col-md-6">
                <div class="name mb-3 mt-3">
                    {{book.name}}
                </div>
                <div class="author">
                    {{book.author}}
                </div>
            </div>
            <div class="col-md-1">
                ×{{book.count}}
            </div>
            <div class="col-md-2">
                {{book.price}}元
            </div>
        </div>
        <hr>
        <div class="total text-right">
            总计
            <div class="money text-danger">
                ￥{{total}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Order",
        props: {
            order: Object
        },
        computed: {
            total () {
                let total = 0;
                this.order.books.forEach((book) => {
                    total += book.money
                })
                return total
            }
        }
    }
</script>

<style scoped>
    .imgbox{
        font-size: 0;
        width: 100px;
        height: 100px;
        text-align: center;
    }
    .imgbox img{
        max-height: 100%;
        max-width: 100%;
        vertical-align: middle;
    }

    .name{
        font-family: 黑体;
        font-size: 18px;
    }

    .author{
        font-family: 仿宋;
        font-size: 12px;
    }

    .total {
        font-family: 等线;
        font-size: 18px;
    }

    .money{
        font-weight: 700;
        font-size: 22px;
        font-family: tohoma,arial;
    }

</style>
