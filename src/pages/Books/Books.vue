<template>
    <div class="container-fluid">
        <div class="mt-5">
            书籍浏览
            <el-button type="primary" class="ml-3" v-if="isManager" @click="dialogVisible = !dialogVisible">
                添加书籍
            </el-button>
        </div>
        <ul  class="mt-5">
            <li v-for="(book, index) in books" :key="index" class="list-unstyled mb-5">
                <Book :book="book" :index="index"></Book>
            </li>
        </ul>
        <el-dialog
                title="添加书籍"
                :visible.sync="dialogVisible"
                width="60%">
            <div>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="书名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="作者">
                        <el-input v-model="form.author"></el-input>
                    </el-form-item>
                    <el-form-item label="ISBN">
                        <el-input v-model="form.ISBN"></el-input>
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
                    <el-form-item label="封面">
                        <el-row>
                            <el-col :span="10">
                                <el-upload
                                        class="avatar-uploader"
                                        action="C:\Users\75667\图片"
                                        :show-file-list="false"
                                        :on-success="handleAvatarSuccess">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-row>
                        <el-col :span="6" :offset="18">
                            <el-button type="primary" @click="addBook">确认添加书籍</el-button>
                        </el-col>
                    </el-row>
                </span>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Book from '../../components/Book/Book'
    import {mapState} from 'vuex'

    export default {
        name: "Books",
        components: {
            Book,
        },
        data () {
            return {
                dialogVisible: false,
                form: {
                    name: '',
                    author: '',
                    ISBN: '',
                    outline: '',
                    stock: undefined,
                    price: undefined,
                },
                imageUrl: '',
            }
        },
        computed: {
            ...mapState({
                isManager: state => state.Person.isManager,
                books: state => state.Books.books
            })
        },
        methods: {
            addBook () {

            },

            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
        }
    }
</script>

<style scoped>
    .avatar-uploader {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
