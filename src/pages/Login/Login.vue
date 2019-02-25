<template>
    <body class="text-center container">
    <form  class="form-signin">
        <h1 class="h2 font-weight-normal mb-3">请先登录</h1>
        <input type="username" class="form-control mb-3" placeholder="用户名" required>
        <input type="password" class="form-control mb-1" placeholder="密码" required>
        <div class="checkbox mb-2">
            <label>
                <input type="checkbox" value="remember-me"> 记住我
            </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2019 上海交通大学软件学院 柳正威</p>
    </form>
    </body>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    .form-signin
    {
        padding: 25%;
    }
</style>
