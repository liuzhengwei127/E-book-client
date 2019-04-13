<template>
    <div class="container mt-5">
        <el-row>
            <el-col :span="8">
                <div class="mb-2">开始日期</div>
                <el-date-picker
                        v-model="beginDate"
                        type="date"
                        value-format="yyyy-MM-dd"
                        :picker-options="beginPickerOptions"
                        placeholder="选择日期">
                </el-date-picker>
            </el-col>
            <el-col :span="8">
                <div class="mb-2">结束日期</div>
                <el-date-picker
                        v-model="endDate"
                        type="date"
                        value-format="yyyy-MM-dd"
                        :picker-options="endPickerOptions"
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
                beginDate: null,
                endDate: null,
                beginPickerOptions: {
                    disabledDate: (time) => {
                        return this.dateConstrain(time, "BEGIN")
                    }
                },
                endPickerOptions: {
                    disabledDate: (time) => {
                        return this.dateConstrain(time, "END")
                    }
                },
            }
        },
        methods: {
            // 判断开始日期与结束日期时间跨度是否在1一个月内
            dateConstrain: function(time, order) {
                let date = new Date(time)
                if (date.getTime() >= Date.now())
                    return true

                if (this.beginDate != null || this.endDate != null) {
                    if (this.beginDate != null && this.endDate != null) {
                        let begin = new Date(this.beginDate)
                        let end = new Date(this.endDate)
                        return this.amongOneMonth(begin, end)
                    } else {
                        if (this.beginDate != null && order == "END") {
                            var begin = new Date(this.beginDate)
                            var end = new Date(time)
                            return this.amongOneMonth(begin, end)
                        }
                        if (this.endDate != null && order == "BEGIN") {
                            var begin = new Date(time)
                            var end = new Date(this.endDate)
                            return this.amongOneMonth(begin, end)
                        }
                    }
                }

                return false
            },

            amongOneMonth: function (begin, end) {
                if (begin.getTime() < end.getTime()
                    && (begin.getMonth() == end.getMonth()
                        || ((end.getMonth()-begin.getMonth() === 1 || (begin.state.getMonth() == 11 && end.state.getMonth() == 0))
                            && begin.getDate() >= end.getDate())))
                    return false
                return true
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
