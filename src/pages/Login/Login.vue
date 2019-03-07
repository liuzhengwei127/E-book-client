<template>
    <body class="text-center">
    <div class="center">
        <el-form v-show="Login" :model="SignUp" label-width="80px">
            <el-form-item>
                <h1 class="h2 font-weight-normal mb-5">请先登录</h1>
            </el-form-item>
            <el-form-item label="用户名">
                <el-input placeholder="请输入用户名" v-model="SignUp.account"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input placeholder="请输入密码" v-model="SignUp.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <div class="checkbox mr-4">
                    <label>
                        <input type="checkbox" value="remember-me"> 记住我
                    </label>
                </div>
            </el-form-item>
            <el-form-item>
                <div class="center">
                    <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">登录</button>
                    <button class="btn btn-lg btn-block" type="button" @click="Login=!Login">注册</button>
                </div>
            </el-form-item>
            <el-form-item>
                <p class="mt-5 mb-3 text-muted">&copy; 2019 上海交通大学软件学院 柳正威</p>
            </el-form-item>
        </el-form>
        <el-form v-show="!Login" :model="SignIn" :rules="rules" label-width="80px">
            <el-form-item>
                <h1 class="h2 font-weight-normal mb-3">注册</h1>
            </el-form-item>
            <el-form-item label="用户名" prop="account">
                <el-input placeholder="请输入用户名" v-model="SignIn.account"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input placeholder="请输入密码" v-model="SignIn.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirm_password">
                <el-input placeholder="请再次输入密码" v-model="SignIn.confirm_password"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input placeholder="请输入邮箱" v-model="SignIn.email"></el-input>
            </el-form-item>
            <el-form-item>
                <div class="center">
                    <button class="btn btn-lg btn-primary btn-block" type="submit" @click="$router.push('/home')">确认注册</button>
                    <button class="btn btn-lg btn-block" type="button" @click="Login=!Login">返回登录</button>
                </div>
            </el-form-item>
            <el-form-item>
                <p class="mt-5 mb-3 text-muted">&copy; 2019 上海交通大学软件学院 柳正威</p>
            </el-form-item>
        </el-form>
    </div>
    </body>
</template>

<script>
    export default {
        name: "Login",
        data () {
            var checkPassword = (rule, value, callback)=> {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.SignIn.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
            return {
                Login: true,
                SignIn: {
                    account: '',
                    password: '',
                    confirm_password: '',
                    email: '',
                },
                SignUp: {
                    account: '',
                    password: '',
                },
                rules: {
                    account: [
                        {required: true, message: '请输入用户名', trigger: 'change'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'change'}
                    ],
                    confirm_password: [
                        {required:true, validator: checkPassword, trigger: 'change'}
                    ],
                    email: [
                        {type: 'email', required: true, message: '请输入正确格式邮箱', trigger: 'change'}
                    ],
                }
            }
        },
        methods: {
            login () {
                if (this.SignUp.account='liuzhengwei' && this.SignUp.password='990127')
                    
            },
        }
    }
</script>

<style scoped>
   .center{
       padding-left: 27%;
       padding-right: 30%;
       padding-top: 5%;
   }
</style>
