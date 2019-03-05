<template>
    <div class="container-fluid py-5">
        <div class="row justify-content-center py-5">
            <div class="text-center col-md-12">
                <h1>E-Book</h1>
                <span>一个线上沉浸交互式新风格书店</span>
            </div>
            <div class="mt-4">
                <button class="btn btn-primary" @click="$router.push('/books')">立即开始探索</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .home{
        width: 100%;
        height: 500px;
    }
</style>
