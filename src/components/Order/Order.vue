<template>
    <div class="container mb-5 mt-5">
        <i class="iconfont icon-dingdan"></i>
        <div v-for="(book, index) in order" :key="book.name" class="mt-3 mb-5">
            <div class="row">
                <div class="imgbox col-md-2">
                    <img :src="urls[index]" class="img-thumbnail" alt="Responsive image">
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
                    ￥{{book.total}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Order",
        props: {
            order: Array
        },
        computed: {
            urls: function () {
                let urls = []
                for (let book of this.order) {
                    if (Object.keys(book).length != 0 && book.url != null) {
                        let index = book.url.lastIndexOf("\\")
                        let url = book.url.slice(index+1, book.url.length)
                        url = "./images/"+url
                        urls.push(url)
                    }

                    urls.push("./")
                }

                return urls
            },
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
