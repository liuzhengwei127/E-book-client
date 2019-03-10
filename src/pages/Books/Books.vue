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
                <Book :book="book"></Book>
            </li>
        </ul>
    </div>
</template>

<script>
    import Book from '../../components/Book/Book'

    export default {
        name: "Books",
        data () {
            return {
                books: [
                    {
                        cover: './images/test1.jpg',
                        name: '看见',
                        author: '柴静',
                        ISBN: '978-7-5495-2932-2',
                        stock: 5,
                        price: 20,
                        outline: '十年前她被选择成为国家电视台新闻主播，却因毫无经验而遭遇挫败，非典时期成为现场记者后，现实生活犬牙交错的切肤之感，让她一点一滴脱离外在与自我的束缚，对生活与人性有了更为宽广与深厚的理解。十年之间，非典、汶川地震、两会报道、北京奥运……在每个重大事件现场，几乎都能发现柴静的身影，而如华南虎照、征地等刚性的调查报道她也多有制作。在书中，她记录下淹没在宏大叙事中的动人细节，为时代留下私人的注脚。一如既往，柴静看见并记录下新闻中给她留的生活。'
                    },
                    {
                        cover: './images/test2.jpg',
                        name: '人类简史：从动物到上帝',
                        author: '尤瓦尔·赫拉利',
                        ISBN: '978-7-5086-4735-7',
                        stock: 20,
                        price: 40,
                        outline: '十万年前，地球上至少有六个人种，但为何今天只剩下我们这一种(智人)?十万年前智人(homosapiens)只是非洲角落的一个毫不起眼的族群，对地球上的生态系影响力和萤火虫、猩猩或水母差不了多少。为何这个物种最终成为地球的主宰?智人究竟是如何导致其他人种和巨型哺乳类动物的灭绝?金钱和宗教从何而来，又为何会产生?人类创建的帝国为何一个个衰亡复又兴起，而且少数民族竟能统治远比自己庞大的族群?为什么地球上几乎每一个社会都有男尊女卑的观念?为何一神教成为最广为接受的宗教?科学和资本主义又是如何成为现代最重要的信条?我们真的了解自己吗?我们过得更加快乐吗?'
                    }
                ],
            }
        },
        components: {
            Book,
        }
    }
</script>

<style scoped>

</style>
