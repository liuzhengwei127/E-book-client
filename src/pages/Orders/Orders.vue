<template>
    <div class="container">
        <ul class="list-unstyled">
            <li v-for="(order, index) in orders" :key="index">
                <Order :order="order"></Order>
            </li>
        </ul>
    </div>
</template>

<script>
    import Order from '../../components/Order/Order'

    export default {
        name: "Orders",
        data () {
            return {
                orders: [
                    {
                        books: [
                            {
                                cover: './images/test1.jpg',
                                name: '看见',
                                author: '柴静',
                                price: 20,
                                count: 1
                            }
                        ]
                    },
                    {
                        books: [
                            {
                                cover: './images/test1.jpg',
                                name: '看见',
                                author: '柴静',
                                price: 20,
                                count: 1
                            },
                            {
                                cover: './images/test2.jpg',
                                name: '人类简史：从动物到上帝',
                                author: '尤瓦尔·赫拉利',
                                price: 40,
                                count: 1
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            Order
        }
    }
</script>

<style scoped>

</style>
