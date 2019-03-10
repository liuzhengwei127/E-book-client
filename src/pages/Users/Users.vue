<template>
    <div>
        <div class="container">
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="name"
                        label="用户名"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="right"
                        prop="address"
                        label="用户状态">
                    <template slot-scope="scope">
                        <div class="user_state">
                            <el-switch
                                    style="display: block"
                                    v-model="scope.row.allow"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    active-text="通行"
                                    inactive-text="禁用">
                            </el-switch>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Users",
        data () {
            return {
                allow: true,
                tableData: [
                    {
                        name: '五柳寄书',
                        allow: true,
                    },
                    {
                        name: '爱因斯坦',
                        allow: true,
                    },
                    {
                        name: '约里克',
                        allow: false,
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .user_state{
        height: 28px;
    }
</style>
