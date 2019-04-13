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
        <ve-line :data="chartData" :settings="chartSettings" class="mt-5" v-if="datePicked"></ve-line>
    </div>
</template>

<script>
    export default {
        name: "Statistics",
        data() {
            this.chartSettings = {
                axisSite: { right: ['购买书目'] },
                yAxisType: ['KMB', 'KMB'],
                yAxisName: ['元', '本']
            }
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
                chartData: {
                    columns:['日期','花费金额', '购买书目'],
                    rows: [
                        {'日期': '3/1', '花费金额':21, '购买书目': 1},
                        {'日期': '3/2', '花费金额':123, '购买书目': 3},
                        {'日期': '3/3', '花费金额':12, '购买书目': 1},
                        {'日期': '3/4', '花费金额':0, '购买书目': 0},
                        {'日期': '3/5', '花费金额':240, '购买书目': 6},
                    ]
                }
            }
        },
        methods: {
            // 判断开始日期与结束日期时间跨度是否在1一个月内
            dateConstrain: function(time, order) {
                let date = new Date(time)

                if (date.getTime() >= Date.now())
                    return true

                if (this.beginDate != null || this.endDate != null) {
                    if (order == "BEGIN") {
                        let begin = new Date(time)
                        let end = new Date(this.endDate)
                        return this.amongOneMonth(begin, end)
                    } else {
                        let begin = new Date(this.beginDate)
                        let end = new Date(time)
                        return this.amongOneMonth(begin, end)
                    }
                }

                return false
            },

            amongOneMonth: function (begin, end) {
                if (begin.getTime() < end.getTime()
                    && (begin.getMonth() == end.getMonth()
                        || ((end.getMonth()-begin.getMonth() === 1 || (begin.getMonth() == 11 && end.getMonth() == 0))
                            && begin.getDate() >= end.getDate())))
                    return false
                return true
            }
        },
        computed: {
            datePicked: function () {
                return (this.beginDate != null && this.endDate != null)
            }
        }
    }
</script>

<style scoped>
</style>
