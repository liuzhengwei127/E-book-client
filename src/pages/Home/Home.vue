<template>
    <div class="container-fluid py-5 home"  lazy="loaded">
        <div class="row justify-content-center py-5">
            <div class="text-center col-md-12">
                <div class="title">E-Book</div>
                <div class="subtitle mb-5">一个沉浸交互式新风格线上书店</div>
                <div class="text">做你自己，因为别人都有人做了。</div>
            </div>
            <div class="mt-4">
                <button class="btn btn-primary" @click="$router.push('/books')">立即开始探索</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                imgUrl: '../../../public/images/home.png'
            }
        }
    }
</script>

<style scoped>
    .title{
        font-family: Calibri;
        font: 72px bold;
    }

    .subtitle{
        font-size: 16px;
        font-family: 等线;
    }

    .text{
        font-size: 20px;
    }

    .home[lazy=loaded]{
        height: 600px;
        background:url('../../../public/images/home.png');
        background-size:cover;
    }
</style>
