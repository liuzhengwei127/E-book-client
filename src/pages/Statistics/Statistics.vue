<template>
    <div class="container mt-5">
        <el-row>
            <el-col :span="8">
                <div class="mb-2">开始日期</div>
                <el-date-picker
                        v-model="beginDate"
                        type="date"
                        placeholder="选择日期">
                </el-date-picker>
            </el-col>
            <el-col :span="8">
                <div class="mb-2">结束日期</div>
                <el-date-picker
                        v-model="endDate"
                        type="date"
                        placeholder="选择日期">
                </el-date-picker>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Statistics",
        data() {
            return {
                beginDate: undefined,
                endDate: undefined,
            }
        }
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
