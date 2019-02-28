<template>
    <div class="container mb-5 mt-5">
        <i class="iconfont icon-dingdan"></i>
        <div v-for="(book) in order.books" :key="book.name" class="row mt-3 mb-3">
            <div class="imgbox col-md-2">
                <img src="../../components/Book/images/test2.jpg" class="img-thumbnail" alt="Responsive image">
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
        <div class="total">
            总计{{total}}元
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
                    total += book.price
                })
                return total
            }
        }
    }
</script>

<style scoped>
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

</style>
