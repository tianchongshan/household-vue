<template>
  <div>
    <div class="title">
      后台注册
    </div>
    <div class="input_group">
      <label>用户名：</label>
      <input class="myinput" type="text" placeholder="请输入用户名" v-model="username" />
    </div>
    <div class="input_group">
      <label>密码：</label>
      <input class="myinput" type="password" placeholder="请输入密码" v-model="userpass" />
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
                userpass: ''
            }
        },
        methods: {
            backLogin() {
                this.$router.replace('/login')
            },
            register() {
                var vm=this;
                this.$reqs.post('users/register', {
                    username: this.username,
                    password: this.password
                }).then(function (res) {
                    if (res.data.status !== true) {
                        Toast(res.data.errMsg);
                    } else {
                        let instance = Toast('注册成功，请登录!');
                        setTimeout(() => {
                            instance.close();
                            vm.$router.replace('/login');
                        }, 2000);
                    }
                })
            }
        }
    }
</script>
<style scoped>

</style>
