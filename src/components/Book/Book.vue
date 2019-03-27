<template>
    <div class="container-fluid">
        <div class="row">
            <div class="imgbox col-md-2" style="cursor: pointer" @click="dialogVisible=!dialogVisible">
                <img :src="book.cover" class="img-thumbnail" alt="Responsive image">
            </div>
            <div class="col-md-6" style="cursor: pointer"  @click="dialogVisible=!dialogVisible">
                <div class="card-link link">
                    <div class="name mt-3 mb-2">{{book.name}}</div>
                    <div class="author mb-1">作者:{{book.author}}</div>
                    <div class="outline">简介:{{book.outline}}</div>
                </div>
            </div>
            <div class="col-md-2">
                <div class="isbn mt-3 mb-5">ISBN:{{book.isbn}}</div>
                <div class="stock mb-2">库存   {{book.stock}}</div>
                <div class="price">{{book.price}}元</div>
            </div>
            <div class="col-md-2" v-if="!isManager">
                <div class="row mt-5 mb-2">
                    <i class="iconfont icon-jian col-md-3" @click="substract" :style="count>1? 'cursor: pointer':''" :class="count>1?'text-danger':''"></i>
                    <div class="col-md-6 text-center">{{count}}</div>
                    <i class="iconfont icon-jia col-md-3 text-danger" @click="add" style="cursor: pointer"></i>
                </div>
                <button class="btn btn-danger btn-block mt-1" @click="addtocart">
                    加入购物车
                </button>
            </div>
            <div class="col-md-2" v-else>
                <button class="btn btn-danger btn-block mt-5" @click="dialogVisible = !dialogVisible">
                    修改信息
                </button>
            </div>
        </div>
        <hr>
        <el-dialog
                :title="isManager? '书籍信息修改':'书籍详情'"
                :visible.sync="dialogVisible"
                width="60%">
            <div v-if="!isManager">
                <div class="row mb-3">
                    <div class="imgbox col-md-4 mt-5">
                        <img :src="book.cover" class="img-thumbnail">
                    </div>
                    <div class="col-md-8 mt-4">
                        <div class="name">
                            书名：{{book.name}}
                        </div>
                        <div class="author">
                            作者：{{book.author}}
                        </div>
                        <div class="isbn mt-2">
                            ISBN：{{book.isbn}}
                        </div>
                        <div class="outline mt-1">
                            简介：{{book.outline}}
                        </div>
                        <div class="mt-2">
                            库存:{{book.stock}}
                        </div>
                    </div>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-row>
                        <el-col :span="6" :offset="18">
                            <el-input-number v-model="count" controls-position="right" :min="1" size="mini"></el-input-number>
                            <el-button type="danger" class="mr-2" @click="addtocart">加入购物车</el-button>
                        </el-col>
                    </el-row>
                </span>
            </div>
            <div v-else>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="书名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="作者">
                        <el-input v-model="form.author"></el-input>
                    </el-form-item>
                    <el-form-item label="ISBN">
                        <el-input v-model="form.isbn"></el-input>
                    </el-form-item>
                    <el-form-item label="简介">
                        <el-input v-model="form.outline" type="textarea" :rows="5"></el-input>
                    </el-form-item>
                    <el-form-item label="库存">
                        <el-row>
                            <el-col :span="24" class="mb-2"><el-input-number v-model="form.stock" controls-position="right" :min="1" size="mini"></el-input-number></el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="价格">
                        <el-row>
                            <el-col :span="24" class="mb-2">
                                <el-input-number v-model="form.price" controls-position="right" :min="1" size="mini"></el-input-number>元
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-row>
                        <el-col :span="6" :offset="18">
                            <el-button type="danger" @click="book_modify">确认修改</el-button>
                        </el-col>
                    </el-row>
                </span>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {reqModifyBook} from "../../api";

    export default {
        name: "Book",
        props: {
            book: Object,
            index: Number,
        },
        data() {
            return {
                count: 1,
                dialogVisible: false,
                form: {
                    name: this.book.name,
                    author: this.book.author,
                    isbn: this.book.isbn,
                    outline: this.book.outline,
                    stock: this.book.stock,
                    price: this.book.price,
                }
            }
        },
        methods: {
            substract () {
                if (this.count > 1)
                    this.count--
            },

            add () {
                this.count++
            },

            addtocart () {
                this.$store.commit('ShopCart/addtocart', {
                    cover: this.book.cover,
                    name: this.book.name,
                    author: this.book.author,
                    count: this.count,
                    price: this.book.price,
                    money: this.count*this.book.price
                })
                this.$message({
                    message: '成功加入购物车',
                    type: 'success'
                });
            },

            book_modify () {
                reqModifyBook(this.form).then(() => {
                    this.$message.success("成功修改书籍信息")
                    this.dialogVisible = !this.dialogVisible
                    this.$store.dispatch('Books/getAllBook')
                })
            }
        },
        computed: {
            ...mapState({
                isManager: state => state.Person.isManager,
            }),
        },
    }
</script>

<style scoped>
    .imgbox{
        font-size: 0;
        width: 200px;
        height: 200px;
        text-align: center;
    }
    .imgbox img{
        max-height: 100%;
        max-width: 100%;
        vertical-align: middle;
    }

    .name{
        font-family: 黑体;
        font-size: 24px;
    }

    .author{
        font-family: 仿宋;
        font-size: 15px;
    }

    .outline{
        font-family: 等线;
        font-size: 12px;
        opacity: 0.6;
    }

    .isbn{
        font-size:10px;
        font-family: Arial;
    }

    .stock{
        font-size:15px;
        font-family: 仿宋;
    }

    .price{
        font-size: 20px;
        font-family: 黑体;
    }

    .link:hover{
        color: steelblue;
    }

</style>
