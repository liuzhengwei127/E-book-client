<template>
    <div class="container-fluid">
        <div class="mt-5">
            书籍搜索
        </div>
        <div class="row mt-5">
            <div class="mt-2">
                <i class="iconfont icon-sousuo col-md-9"></i>
            </div>
            <input type="text" class="form-control col-md-10" v-model="filter">
            <button class="btn btn-primary btn-block ml-2 col-md-1" @click="searchBook">搜索</button>
        </div>
        <div>
            <ul  class="mt-5">
                <li v-for="(book, index) in books" :key="index" class="list-unstyled mb-5">
                    <Book :book="book" :index="index"></Book>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Book from '../../components/Book/Book'

    export default {
        name: "Search",
        components: {
            Book,
        },
        data() {
            return {
                filter: "",
            }
        },
        computed: {
            ...mapState({
                books: state => state.Books.filteredBooks
            })
        },
        methods: {
            searchBook() {
                this.$store.dispatch('Books/searchBook', this.filter)
            }
        }
    }
</script>

<style scoped>

</style>
