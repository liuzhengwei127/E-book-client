<template>
    <body class="text-center">
    <div class="center">
        <form  class="form-signin" v-show="Login">
            <h1 class="h2 font-weight-normal mb-3">请先登录</h1>
            <input type="username" class="form-control mb-3" placeholder="用户名" required>
            <input type="password" class="form-control mb-1" placeholder="密码" required>
            <div class="checkbox mb-2">
                <label>
                    <input type="checkbox" value="remember-me"> 记住我
                </label>
            </div>
        </form>
        <form  class="form-signup" v-show="!Login">
            <h1 class="h2 font-weight-normal mb-3">注册</h1>
            <input type="username" class="form-control mb-1" placeholder="用户名" required>
            <input type="password" class="form-control mb-1" placeholder="密码" required>
            <input type="password" class="form-control mb-1" placeholder="确认密码" required>
            <input type="email" class="form-control mb-1" placeholder="邮箱" required>
        </form>
        <div class="center">
            <div v-if="Login">
                <button class="btn btn-lg btn-primary btn-block" type="submit" @click="$router.push('/home')">登录</button>
                <button class="btn btn-lg btn-block" type="button" @click="Login=!Login">注册</button>
            </div>
            <div v-else>
                <button class="btn btn-lg btn-primary btn-block" type="submit" @click="$router.push('/home')">确认注册</button>
                <button class="btn btn-lg btn-block" type="button" @click="Login=!Login">返回登录</button>
            </div>

        </div>
        <p class="mt-5 mb-3 text-muted">&copy; 2019 上海交通大学软件学院 柳正威</p>
    </div>
    </body>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return {
                Login: true,
            }
        }
    }
</script>

<style scoped>
   .center{
       padding-left: 30%;
       padding-right: 30%;
       padding-top: 7%;
   }
</style>
