<template>
    <div>
        <div class="container">
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="account"
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
                                    v-model="scope.row.allowed"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    active-text="通行"
                                    inactive-text="禁用"
                                    @change="changeAllow(scope.$index)">
                            </el-switch>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Users",
        data () {
            return {
            }
        },
        computed: {
            ...mapState({
                tableData: state => state.Person.users
            })
        },
        methods: {
            changeAllow (index) {
                this.$store.commit('Person/changeAllow', {index: index,allowed : this.tableData[index].allowed})
            }
        }
    }
</script>

<style scoped>
    .user_state{
        height: 28px;
    }
</style>
