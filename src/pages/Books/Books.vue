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
                <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                    <el-form-item label="书名" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="作者" prop="author">
                        <el-input v-model="form.author"></el-input>
                    </el-form-item>
                    <el-form-item label="ISBN" prop="ISBN">
                        <el-input v-model="form.ISBN"></el-input>
                    </el-form-item>
                    <el-form-item label="简介" prop="outline">
                        <el-input v-model="form.outline" type="textarea" :rows="5"></el-input>
                    </el-form-item>
                    <el-form-item label="库存" prop="stock">
                        <el-row>
                            <el-col :span="24" class="mb-2"><el-input-number v-model="form.stock" controls-position="right" :min="1" size="mini"></el-input-number></el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="价格" prop="price">
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
                                        :before-remove="beforeRemove"
                                        :file-list="fileList"
                                        class="upload-demo"
                                        action="/api/upload">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                </el-upload>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
                <el-form>
                    <span>
                    <el-row>
                        <el-col :span="6" :offset="18">
                            <el-button type="primary" @click="addBook('form')">确认添加书籍</el-button>
                        </el-col>
                    </el-row>
                </span>
                </el-form>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Book from '../../components/Book/Book'
    import {mapState} from 'vuex'
    import {reqAddBook, reqDeleteImg} from '../../api'

    export default {
        name: "Books",

        mounted() {
            this.$store.dispatch('Books/getAllBook')
        },

        components: {
            Book,
        },
        data () {
            return {
                dialogVisible: false,
                fileList: [],
                form: {
                    name: '',
                    author: '',
                    ISBN: '',
                    outline: '',
                    stock: undefined,
                    price: undefined,
                },
                rules: {
                    name: [
                        {required: true, message: '请输入书名', trigger: 'change'},
                    ],
                    author: [
                        {required: true, message: '请输入作者', trigger: 'change'}
                    ],
                    ISBN: [
                        {required:true, message: '请输入ISBN', trigger: 'change'}
                    ],
                    outline: [
                        {required:true, message: '请输入简介', trigger: 'change'}
                    ],
                    stock: [
                        {required:true, message: '请输入库存', trigger: 'change'}
                    ],
                    price: [
                        {required:true, message: '请输入价格', trigger: 'change'}
                    ],
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
            addBook (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        reqAddBook(this.form).then( () => {
                            this.dialogVisible = !this.dialogVisible
                            this.$message.success("成功添加书籍！")
                            this.$store.dispatch('Books/getAllBook')
                        })
                    } else {
                        return false
                    }
                })
            },

            beforeRemove (file) {
                reqDeleteImg(file.name).then((data) => {
                    if (data === "删除失败") {
                        return false
                    }
                }).catch( (error) => {
                    console.log(error)
                    return false
                })
            }
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
