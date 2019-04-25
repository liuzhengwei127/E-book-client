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
                <div class="center">
                    <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="signin('SignIn')">登录</button>
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
            <el-form-item label="手机号" prop="account">
                <el-row>
                    <el-col :span="16"><el-input placeholder="请输入手机号" v-model="SignUp.account"></el-input></el-col>
                    <el-col :span="8" v-show="!countDown"><el-button type="success" plain :disabled="!phoneCheck" @click="getCode(SignUp.account)">获取验证码</el-button></el-col>
                    <el-col :span="8" v-show="countDown"><el-button type="success" plain disabled>{{count}}s后重发</el-button></el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="用户名" prop="name">
                <el-input placeholder="请输入用户名" v-model="SignUp.name"></el-input>
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
            <el-form-item label="手机验证码" prop="code">
                <el-input placeholder="请输入验证码" v-model="SignUp.code"></el-input>
            </el-form-item>
            <el-form-item>
                <div class="center">
                    <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="signup('SignUp')">
                        <div>确认注册</div>
                    </button>
                    <button class="btn btn-lg btn-block" type="button" @click="Login=!Login">
                        <div>返回登录</div>
                    </button>
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
    import {reqLogin, reqSignup, reqPhoneCode} from '../../api'

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
                    callback(new Error('手机号不能为空'));
                } else {
                    callback()
                }
            }
            var Phone = (rule, value, callback) => {
                if (value === ''){
                    callback(new Error('手机号不能为空'))
                } else {
                    const reg = /^1[3|4|5|7|8]\d{9}$/
                    if (reg.test(value)) {
                        callback()
                    } else {
                        callback(new Error('请输入正确的手机号'))
                    }
                }
            }
            var Code = (rule, value, callback) => {
                if (value === ''){
                    callback(new Error('验证码不能为空'));
                } else{
                    const reg = /\d{6}$/
                    if (reg.test(value)) {
                        callback()
                    } else {
                        callback(new Error('请输入6位验证码'))
                    }
                }
            }
            return {
                count: 0,
                countDown: false,
                Login: true,
                SignUp: {
                    account: '',
                    name:'',
                    password: '',
                    confirm_password: '',
                    email: '',
                    code: '',
                },
                SignIn: {
                    account: '',
                    password: '',
                },
                signup_rules: {
                    account: [
                        {required: true, validator: Phone, trigger: 'blur'},
                    ],
                    name: [
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
                    code: [
                        {required: true, validator: Code, trigger: 'change'}
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
            // 获取手机验证码
            getCode(phoneNumber) {
                reqPhoneCode(phoneNumber).then((data) => {
                    if (data == "发送成功") {
                        this.setTimer()
                    } else {
                        this.$message.error("验证码发送失败")
                    }
                })
            },
            // 设定计时器
            setTimer() {
                const TIME_COUNT = 60
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.countDown = true;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.countDown = false;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000)
                }
            },
            // 用户登录
            signin(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        reqLogin({
                            account: this.SignIn.account,
                            password: this.SignIn.password
                        }).then((data) => {
                            if (data.isLogin) {
                                if (data.code) {
                                    this.$store.commit('Person/changeManager')
                                    this.$store.commit('Person/changeLogin')
                                    this.$store.commit('Person/setAccount', data.account)
                                    this.$router.push('/books')
                                } else {
                                    this.$store.commit('Person/changeLogin')
                                    this.$store.commit('Person/setAccount', data.account)
                                    this.$router.push('/home')
                                }
                            } else {
                                this.SignIn.password = ''
                                this.$message.error(data.message)
                                return false
                            }
                        }).catch(() => {
                            this.$message.error("登录失败，请检查网络连接")
                        })
                    } else {
                        this.$message.error("请输入有效的用户名和密码");
                        return false
                    }
                })
            },
            // 用户注册
            signup(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        reqSignup({
                            account: this.SignUp.account,
                            password: this.SignUp.password,
                            name: this.SignUp.name,
                            code: this.SignUp.code,
                        }).then((data) => {
                            if (data == "注册成功") {
                                this.$alert('注册成功', {
                                    confirmButtonText: '确定',
                                    callback: () => {
                                        this.Login = !this.Login
                                        this.SignUp.account = ''
                                        this.SignUp.password = ''
                                        this.SignUp.confirm_password = ''
                                        this.SignUp.name = ''
                                        this.SignUp.email = ''
                                    }
                                });
                            }
                            if (data == "账户已存在") {
                                this.$message.error("账户已存在！")
                                return false;
                            }

                            if (data == "验证码错误") {
                                this.$message.error("验证码错误！")
                                return false
                            }
                        }).catch(() => {
                            this.$message.error("注册失败，请检查网络连接")
                        })

                    } else {
                        this.$message.error("请输入有效的用户名和密码")
                        return false;
                    }
                })
            }
        },
        computed: {
            ...mapState({
                users: state => state.Person.users,
            }),
            phoneCheck () {
                const reg = /^1[3|4|5|7|8]\d{9}$/
                if (reg.test(this.SignUp.account)) {
                    return true
                } else {
                    return false
                }
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
