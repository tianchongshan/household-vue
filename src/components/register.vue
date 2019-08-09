<template>
  <div>
    <div class="title">
      后台注册
    </div>
    <div class="input_group">
      <label>用户名：</label>
      <input class="myinput" type="text" placeholder="请输入用户名" v-model="loginName" />
    </div>
    <div class="input_group">
      <label>密码：</label>
      <input class="myinput" type="password" placeholder="请输入密码" v-model="password" />
    </div>
    <div class="input_group">
      <label>真实姓名：</label>
      <input class="myinput" type="text" placeholder="请输入登录名" v-model="username" />
    </div>
    <div class="input_group">
      <label>手机号码：</label>
      <input class="myinput" type="text" placeholder="请输入登录名" v-model="mobileNo" />
    </div>
    <div class="input_group">
      <label>邮箱地址：</label>
      <input class="myinput" type="text" placeholder="请输入邮箱" v-model="email" />
    </div>
    <button class="ok_btn" @click="register">注册</button>
    <button class="cancel_btn" @click="backLogin">{{backText}}</button>
  </div>
</template>
<script>
    import {
        Toast
    } from 'mint-ui'
    export default {
        data() {
            return {
                backText: '返回',
                username: '',
                password: '',
                loginName:'',
                mobileNo:'',
                email:''
            }
        },
        methods: {
            backLogin() {
                this.$router.replace('/')
            },
            register() {
                var vm=this;
                this.$reqs.post('http://127.0.0.1:8085/sys/user/add', {
                    username: this.username,
                    password: this.password,
                    loginName:this.loginName,
                    mobileNo:this.mobileNo,
                    email:this.email,
                    type:1,
                    roleId:2
                },{
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }).then(response => {
                    if (response.data.code !== "000000") {
                        Toast(response.data.msg);
                    } else {
                        let instance = Toast('注册成功，请登录!');
                        setTimeout(() => {
                            instance.close();
                            vm.$router.replace('/');
                        }, 2000);
                    }
                })
            }
        }
    }
</script>
<style scoped>

</style>
