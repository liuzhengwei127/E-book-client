<template>
    <div>
        <div class="collapse bg-dark" :class="{show : collapsed}">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-md-7 py-4">
                        <h4 class="text-white">About</h4>
                        <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                    </div>
                    <div class="col-sm-4 offset-md-1 py-4">
                        <h4 class="text-white">Contact</h4>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-white">Follow on Github</a></li>
                            <li><a href="#" class="text-white">Email me</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">E-book在线书店</a>
            <button class="navbar-toggler" @click="collapsed=!collapsed">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data () {
            return {
                collapsed: false,
            }
        }
    }
</script>

<style scoped>

</style>
