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
                        <input type="checkbox" value="remember-me"> 记住我(未实现）
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
    import {mapState} from 'vuex'
    export default {
        name: "Login",
        data () {
            var checkPassword = (rule, value, callback)=> {
                if (value === '') {
                    callback(new Error('请再次输入密码'))
                } else if (value !== this.SignUp.password) {
                    callback(new Error('两次输入密码不一致!'))
                } else {
                    callback()
                }
            }

            var Password =  (rule, value, callback) => {
                if (value === ''){
                    callback(new Error('密码不能为空'));
                } else {
                    callback()
                }
            }

            var Account = (rule, value, callback) => {
                if (value === ''){
                    callback(new Error('用户名不能为空'));
                } else {
                    callback()
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
                        { validator: Account, trigger: 'change'},
                    ],
                    password: [
                        { validator: Password, trigger: 'change'}
                    ],
                }
            }
        },
        methods: {
            signin(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios({
                            method: 'post',
                            url: '/api/user/login',
                            data: {
                                account: this.SignIn.account,
                                password: this.SignIn.password
                            }
                        }).then((response) => {
                            if (response.data.login) {
                                if (response.data.code) {
                                    this.$store.commit('Person/changeManager')
                                    this.$store.commit('Person/changeLogin')
                                    this.$router.push('/books')
                                } else {
                                    this.$store.commit('Person/changeLogin')
                                    this.$router.push('/home')
                                }
                            } else {
                                switch (response.data.code) {
                                    case 0:
                                        this.SignIn.password = ''
                                        this.$message.error('用户不存在');
                                        return false
                                    case 1:
                                        this.SignIn.password = ''
                                        this.$message.error('密码错误');
                                        return false
                                    case 2:
                                        this.SignIn.password = ''
                                        this.$message.error('用户被禁用');
                                        return false
                                }
                            }
                        })

                        /*
                        if (this.SignIn.account === 'liuzhengwei' && this.SignIn.password === '990127'){
                            this.$store.commit('Person/changeManager')
                            this.$store.commit('Person/changeLogin')
                            this.$router.push('/books')
                        }
                        else {
                            let correct = false
                            for (let user of this.users) {
                                if (this.SignIn.account === user.account && this.SignIn.password === user.password) {
                                    if (user.allowed){
                                        this.$store.commit('Person/changeLogin')
                                        this.$router.push('/home')
                                        correct = true
                                        break
                                    }
                                    else {
                                        this.$message.error('用户已被禁用');
                                        return false
                                    }
                                }
                            }

                            if (!correct){
                                console.log('error password!!')
                                this.SignIn.password = ''
                                this.$message.error('密码错误或者用户不存在');
                                return false
                            }
                        }
                        */
                    } else {
                        this.$message.error("请输入有效的用户名和密码");
                        return false
                    }

                })
            },
            signup(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$store.commit('Person/addUser', {
                            account: this.SignUp.account,
                            password: this.SignUp.password,
                            allowed: true
                        })
                        this.Login = !this.Login
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            }
        },
        computed: {
            ...mapState({
                users: state => state.Person.users,
            }),
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
