<template>
    <div class="container mt-5">
        <div>
            开始时间
            <input type="date" class="date-picker"></input>
        </div>
        <div>
            结束时间
            <input type="date" class="date-picker"></input>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Statistics"
    }
</script>

<style scoped>
.date-picker{
    border: 1px solid #ccc;
    border-radius: 2px;
    box-shadow: inset 0 1px #fff, 0 1px #eee;
    background-color: #eee;
    background-image: -webkit-linear-gradient(top, #f0f0f0, #e6e6e6);
}
</style>
