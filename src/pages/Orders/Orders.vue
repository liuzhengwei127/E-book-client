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
    import {mapState} from 'vuex'
    import Order from '../../components/Order/Order'

    export default {
        name: "Orders",
        data () {
            return {

            }
        },
        components: {
            Order
        },
        computed: {
            ...mapState({
                orders: state => state.Orders.orders
            })
        }
    }
</script>

<style scoped>

</style>
