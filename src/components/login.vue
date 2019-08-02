<template>
  <div class="backlogin">

    <div class="login_box">
      <Form ref="formLogin" :model="formLogin" :rules="ruleLogin">
      <div class="title">后台登录</div>
      <div>
        <FormItem prop="username">
           <input v-model="formLogin.username" class="myinput" type="text" placeholder="请输入用户名"  />
        </FormItem>
        <FormItem prop="password">
           <input v-model="formLogin.password" @keyup.13="login" class="myinput" type="password" placeholder="请输入密码"  />
        </FormItem>
      </div>
      <div class="login_other">
        <a href="javascript:;">注册</a>
        <input type="checkbox" id="remenberme" />
        <label for="remenberme">记住我</label>
      </div>
        <FormItem>
            <Button :disabled="disablebtn" class="login" @click="login('formLogin')" >登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
    import {
        Toast
    } from 'mint-ui';
    import {
        mapMutations
    } from 'vuex';

    export default {
        name: 'backlogin',
        data() {
            return {
                formLogin: {
                    username: null,
                    password: null,
                    disablebtn: false,
                    loginText: "登录"
                },
                ruleLogin: {
                    userName: [
                        {required: true, message: '请填写用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请填写密码', trigger: 'blur'},
                    ]
                }
            }
        },
        methods: {
          ...mapMutations(['changeLogin']),
            login(formLogin) {
                let _this = this;
                if(this.loginFrom.userName === ''|| this.loginFrom.password === ''){
                    alert('账号或密码不能为空');
                }else{
                    this.axios({
                        methos: 'post',
                        url: '/sys/user/login',
                        data: _this.loginFrom
                    }).then.(res=>{
                        console.log(res.data);
                        _this.userToken = 'Bearer' + res.data.data.body.token;
                        //将用户token保存到vuex
                        _this.changeLogin({Authorization:_this.userToken});
                        _this.$router.push('/home');
                        alert('登录成功')
                    }).catch(error => {
                        alert('账号或密码错误');
                        console,log(error);
                    });
                }
                /*this.$refs[formLogin].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch('users/userLogin', {
                            "user_name": this.formLogin.userName,
                            "user_password": this.formLogin.password,
                            "router": this.$router
                        })
                    }
                })*/
            }
        }
    };
</script>
<style scope>
 /* 剩下的样式自由发挥*/
</style>
