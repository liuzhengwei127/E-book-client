<template>
    <div class="container-fluid">
        <div class="mt-5">
            书籍浏览
            <el-button type="primary" class="ml-3" v-if="isManager">
                添加书籍
            </el-button>
        </div>
        <ul  class="mt-5">
            <li v-for="(book, index) in books" :key="index" class="list-unstyled mb-5">
                <Book :book="book" :index="index"></Book>
            </li>
        </ul>
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
        computed: {
            ...mapState({
                isManager: state => state.Person.isManager,
                books: state => state.Books.books
            })
        }
    }
</script>

<style scoped>

</style>
