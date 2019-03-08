<template>
    <body class="text-center">
    <div class="center">
        <el-form v-show="Login" :model="SignIn" label-width="80px" ref="SignIn" :rules="signin_rules">
            <el-form-item>
                <h1 class="h2 font-weight-normal mb-5">请先登录</h1>
            </el-form-item>
            <el-form-item label="用户名" prop="account">
                <el-input placeholder="请输入用户名" v-model="SignIn.account"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input placeholder="请输入密码" v-model="SignIn.password" show-password></el-input>
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
                    <button class="btn btn-lg btn-primary btn-block" type="submit" @click="signin('SignIn')">登录</button>
                    <button class="btn btn-lg btn-block" type="button" @click="Login=!Login">注册</button>
                </div>
            </el-form-item>
            <el-form-item>
                <p class="mt-5 mb-3 text-muted">&copy; 2019 上海交通大学软件学院 柳正威</p>
            </el-form-item>
        </el-form>
        <el-form v-show="!Login" :model="SignUp" :rules="signup_rules" label-width="80px" ref="SignUp">
            <el-form-item>
                <h1 class="h2 font-weight-normal mb-3">注册</h1>
            </el-form-item>
            <el-form-item label="用户名" prop="account">
                <el-input placeholder="请输入用户名" v-model="SignUp.account"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input placeholder="请输入密码" v-model="SignUp.password" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirm_password">
                <el-input placeholder="请再次输入密码" v-model="SignUp.confirm_password" show-password></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input placeholder="请输入邮箱" v-model="SignUp.email"></el-input>
            </el-form-item>
            <el-form-item>
                <div class="center">
                    <button class="btn btn-lg btn-primary btn-block" type="submit" @click="signup('SignUp')">确认注册</button>
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
                } else if (value !== this.SignUp.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
            return {
                Login: true,
                SignUp: {
                    account: '',
                    password: '',
                    confirm_password: '',
                    email: '',
                },
                SignIn: {
                    account: '',
                    password: '',
                },
                signup_rules: {
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
                },
                signin_rules: {
                    account: [
                        {required: true, message: '请输入用户名', trigger: 'change'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'change'}
                    ],
                }
            }
        },
        methods: {
            signin(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$store.commit('Person/changeLogin')

                        if (this.SignIn.account === 'liuzhengwei' && this.SignIn.password === '990127'){
                            this.$store.commit('Person/changeManager')
                            this.$router.push('/home')
                        }
                        else {
                            this.$router.push('/books')
                        }

                    } else {
                        console.log('error submit!!');
                        return false;
                    }

                })
            },
            signup(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$store.commit('Person/changeLogin')
                        this.$router.push('/home')
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            }
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
